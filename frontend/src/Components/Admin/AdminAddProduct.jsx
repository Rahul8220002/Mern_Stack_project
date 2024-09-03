import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AddProduct } from "../app/feature/cartSlice";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const AdminAddProduct = () => {
  const [image, setImage] = useState("");

  const [addproduct, setAddproduct] = useState({
    title: "",
    descriptions: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
    productImage: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAddproduct({ ...addproduct, [name]: value });
  };

  const getImage = (e) => {
    e.preventDefault();
    const uploadImage = e.target.files[0];
    if (uploadImage) {
      setAddproduct({
        ...addproduct,
        productImage: uploadImage,
      });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
    }
  };

  const submitProducts = async (e) => {
    e.preventDefault();
    if (
      !addproduct.title ||
      !addproduct.brand ||
      !addproduct.category ||
      !addproduct.descriptions ||
      !addproduct.productImage ||
      !addproduct.price ||
      !addproduct.quantity
    ) {
      toast.error("All field are required");
    }

    const formData = new FormData();
    formData.append("title", addproduct.title);
    formData.append("brand", addproduct.brand);
    formData.append("price", addproduct.price);
    formData.append("descriptions", addproduct.descriptions);
    formData.append("category", addproduct.category);
    formData.append("quantity", addproduct.quantity);
    formData.append("productImage", addproduct.productImage);

    const respose = await dispatch(AddProduct(formData));
    if (respose?.payload?.success) {
      navigate("/My Product");
      setAddproduct({
        title: "",
        descriptions: "",
        category: "",
        brand: "",
        price: "",
        quantity: "",
        productImage: "",
      });
    }
  };
  return (
    <>
      <HomeLayout>
        <div className="mt-3 mb-5">
          <span
            className="bg-purple-500 cursor-pointer p-2 px-6 sm:mx-6 rounded-lg"
            onClick={() => navigate(-1)}
          >
            Back
          </span>
          <form
            noValidate
            className="max-w-md mx-auto mt-24"
            onSubmit={submitProducts}
          >
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-lg">Add Product Details</h1>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="title"
                value={addproduct.title}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="descriptions"
                value={addproduct.descriptions}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Descriptions
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="category"
                value={addproduct.category}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Category
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="brand"
                  value={addproduct.brand}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Brand
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="price"
                  value={addproduct.price}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Price
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="quantity"
                  value={addproduct.quantity}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Quantity
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group" value={image}>
                <input
                  type="file"
                  name="Image_upload"
                  onChange={getImage}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Product-Image
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
          </form>
        </div>
      </HomeLayout>
    </>
  );
};

export default AdminAddProduct;
