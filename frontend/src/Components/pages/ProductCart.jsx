import { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { useSelector, useDispatch } from "react-redux";
import { AllCartDetails } from "../app/feature/cartSlice";
import { useNavigate } from "react-router-dom";
import { addtocart } from "../app/feature/addSlice";

const ProductCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAllProduct } = useSelector((state) => state.cart);

  const addtoitem = (item) => {
    dispatch(addtocart(item));
  };
  const getproduct = async () => {
    await dispatch(AllCartDetails());
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <HomeLayout>
        <h1 className="text-2xl italic font-bold  p-3">All top product</h1>
        <div className="flex flex-wrap md:grid grid-cols-5 gap-4">
          {getAllProduct?.map((item) => {
            return (
              <div
                key={item._id}
                className="shadow-xl flex gap-2 font-sans h-auto rounded-2xl hover:border border-b-slate-500 hover:shadow-blue-900"
              >
                <div className="card bg-base-100 w-90 shadow-xl">
                  <figure
                    className="px-8 pt-5 border-b-2 border-sky-100 cursor-pointer"
                    onClick={() =>
                      navigate("/product details", { state: { item } })
                    }
                  >
                    <img
                      src={item.productImage}
                      alt="Shoes"
                      className="rounded-xl hover:scale-105"
                    />
                  </figure>
                  <div className="flex justify-center items-center flex-col p-3">
                    <h2 className="card-title">{item.title}</h2>
                    <span className="font-bold">FROM-:${item.price}</span>
                    <div className="card-actions p-2">
                      <button className="bg-amber-600 p-2 rounded-lg">
                        Buy Now
                      </button>
                      <button
                        className="bg-amber-600 p-2 rounded-lg"
                        onClick={() => addtoitem(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </HomeLayout>
    </>
  );
};
export default ProductCart;
