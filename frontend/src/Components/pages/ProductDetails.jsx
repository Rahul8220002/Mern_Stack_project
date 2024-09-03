import { useLocation } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const ProductDetails = () => {
  const { state } = useLocation();

  return (
    <HomeLayout>
      <div className="h-[80vh] flex justify-center w-full bg-sky-900">
        <div className="card lg:card-side bg-base-100 shadow-xl w-[80%] h-fit mt-4">
          <figure className="w-4/12 flex justify-center items-center flex-col border-4 p-4">
            <img
              src={state?.item?.productImage}
              alt="Album"
              className="w-[50%]"
            />
            <p className="text-center font-mono font-semibold border-t-4 border-sky-900 p-2 mt-10">
              Title-: {state?.item?.title}
            </p>
          </figure>
          <div className="card-body gap-2">
            <div>
              <h2 className="card-title font-extrabold text-3xl mb-4">
                Product Details!
              </h2>
              <p>
                <span className="font-bold text-sky-600 text-xl">Brand-:</span>
                {state?.item?.brand}
              </p>
              <p>
                <span className="font-bold">descriptions-:</span>
                {state?.item?.descriptions}
              </p>
              <p>
                <span className="font-bold">Category-:</span>
                {state?.item?.category}
              </p>
              <p>
                <span className="font-bold">Quantity-:</span>
                {state?.item?.quantity}
              </p>
              <h3>
                <span className="font-bold">Price-:$</span>
                {state?.item?.price}
              </h3>
            </div>
            <div className="card-actions justify-start border-t-4 border-sky-900 ">
              <button className="mt-3 btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center bg-slate-500">
        <section className="w-[65%] flex items-center bg-orange-400">
          <div className="flex justify-center flex-col gap-2 p-3">
            <img src={state?.item?.productImage} alt="" className="w-[25%]" />
            <p className="text-base font-semibold border-2 p-2 rounded-md">
              Title-: {state?.item?.title}
            </p>
          </div>
          <div>
            <p>Brand-:{state?.item?.brand}</p>
            <div>descriptions-:{state?.item?.descriptions}</div>
            <p>Category-:{state?.item?.category}</p>
            <p>Quantity-:{state?.item?.quantity}</p>
            {/* <p>{state?.item?.ratings}</p> */}
      {/* <h3>Price-:{state?.item?.price}</h3> */}
      {/* </div>
        </section>
      </div> */}{" "}
    </HomeLayout>
  );
};

export default ProductDetails;
