import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOurProductDetails,
  RemoveItem,
  UpdateImage,
  UpdateProductItem,
} from "../app/feature/cartSlice";
import HomeLayout from "../Layout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ProductImageChange from "./ProductImageChange";
import { FaEdit } from "react-icons/fa";
import { FcEditImage } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import AdminUpdateProduct from "./AdminUpdateProduct";

const GetourProduct = () => {
  const [isShow, setIsShow] = useState(false);
  const [isEditShow, setEditShow] = useState(false);
  const [image, setImage] = useState("");
  const [ItemImage, setItemImage] = useState({
    productImage: "",
  });
  const [Updatedproduct, setUpdatedproduct] = useState({
    title: "",
    descriptions: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
  });

  const { getOurData } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ImageUpdateHandle = (item) => {
    setIsShow(!isShow);
    const previous = {
      id: item._id,
    };
    setItemImage(previous);
  };

  const getImage = (e) => {
    e.preventDefault();
    const uploadImage = e.target.files[0];
    if (uploadImage) {
      setItemImage({
        ...ItemImage,
        productImage: uploadImage,
      });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!ItemImage) {
      return toast.error("image required");
    }
    const formData = new FormData();

    formData.append("productImage", ItemImage.productImage);
    const respose = await dispatch(UpdateImage([...formData]));

    if (respose?.payload?.success) {
      setIsShow(false);
    }
  };

  const getourAllProduct = async () => {
    await dispatch(GetOurProductDetails());
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUpdatedproduct({ ...Updatedproduct, [name]: value });
  };

  const handleUpdate = (item) => {
    setEditShow(!isEditShow);
    const obj = {
      id: item._id,
      title: item.title,
      descriptions: item.descriptions,
      category: item.category,
      brand: item.brand,
      price: item.price,
      quantity: item.quantity,
    };
    setUpdatedproduct(obj);
  };

  const submitProducts = async (e) => {
    e.preventDefault();
    if (
      !Updatedproduct.title ||
      !Updatedproduct.brand ||
      !Updatedproduct.category ||
      !Updatedproduct.descriptions ||
      !Updatedproduct.price ||
      !Updatedproduct.quantity
    ) {
      return toast.error("All field are required");
    }

    const respose = await dispatch(UpdateProductItem(Updatedproduct));
    if (respose?.payload?.success) {
      setUpdatedproduct({
        title: "",
        descriptions: "",
        category: "",
        brand: "",
        price: "",
        quantity: "",
      });
    }
    setEditShow(false);
    getourAllProduct();
  };

  const handleRemove = async (id) => {
    await dispatch(RemoveItem(id));
    getourAllProduct();
  };

  useEffect(() => {
    getourAllProduct();
  }, []);

  return (
    <HomeLayout>
      <div>
        <div className="flex justify-between items-center p-2">
          <span
            onClick={() => navigate(-1)}
            className="md:p-2 sm:p-2 cursor-pointer hover:bg-slate-500 rounded-lg"
          >
            <GoArrowLeft className="text-xl md:text-2xl" />
          </span>
          <h1 className="font-bold md:text-2xl mx-1 sm:text-2xl">
            your item list →{getOurData?.length}
          </h1>
          <Link
            to={"/addproduct"}
            className="bg-purple-400 hover:bg-purple-600 p-1 md:p-2 sm:p-3 rounded-xl"
          >
            AddProduct➕
          </Link>
        </div>
        <div className="h-auto flex justify-center items-center flex-col w-full bg-sky-900 gap-1">
          {getOurData &&
            getOurData.map((items) => {
              return (
                <div
                  key={items._id}
                  className="flex flex-col w-[95%] mt-3 mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center justify-evenly flex-col">
                    <img
                      className="object-cover w-full rounded-t-lg h-76 md:h-40 md:w-40 md:rounded-none md:rounded-s-lg cursor-pointer"
                      src={items.productImage}
                      alt="product image"
                    />
                    <span className="text-center text-gray-700 p-2 cursor-pointer hover:font-semibold">
                      Title-:{items.title}
                    </span>
                  </div>
                  <div className="flex flex-col p-2 leading-normal md:mx-16">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Product Details
                    </h5>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold ">Brand-:</span>
                      {items.brand}
                    </p>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">descriptions-:</span>
                      {items.descriptions}
                    </p>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold ">category-:</span>
                      {items.category}
                    </p>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold ">Quantity-:</span>
                      {items.quantity}
                    </p>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold ">price-:</span>
                      {items.price}
                    </p>
                    <div className="border-t-2 border-sky-800">
                      <button
                        className="bg-yellow-600 p-2 m-2 rounded-lg font-semibold hover:bg-yellow-500"
                        onClick={() => {
                          handleUpdate(items);
                        }}
                      >
                        <button className="flex items-center">
                          <FaEdit className="me-1" />
                          Details
                        </button>
                      </button>
                      <button
                        onClick={() => ImageUpdateHandle(items)}
                        className="bg-yellow-600 p-2 m-2 rounded-lg font-semibold hover:bg-yellow-500"
                      >
                        <span className="flex items-center">
                          <FcEditImage className="me-1" />
                          Image Only
                        </span>
                      </button>
                      <button
                        className="bg-red-600 p-2 m-2 rounded-lg font-semibold hover:bg-red-500"
                        onClick={() => handleRemove(items._id)}
                      >
                        <span className="flex items-center">
                          <MdDeleteForever className="me-1" />
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {isShow && (
        <ProductImageChange
          image={image}
          getImage={getImage}
          handleSumbit={handleSumbit}
        />
      )}
      {isEditShow && (
        <AdminUpdateProduct
          Updatedproduct={Updatedproduct}
          handleChange={handleChange}
          submitProducts={submitProducts}
        />
      )}
    </HomeLayout>
  );
};
export default GetourProduct;
