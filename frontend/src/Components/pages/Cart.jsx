import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../Layout/HomeLayout";
import { removeItem } from "../app/feature/addSlice";

const Cart = () => {
  const { data } = useSelector((state) => state?.addto);

  const disptch = useDispatch();
  const remove = (Item) => {
    disptch(removeItem(Item._id));
  };

  return (
    <>
      <HomeLayout>
        <div className="flex flex-wrap md:grid grid-cols-2 gap-4 mt-6">
          {data &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex justify-between gap-3 shadow-xl font-sans h-auto rounded-2xl hover:border border-b-slate-500 hover:shadow-blue-900 "
                >
                  <div className="flex-none w-40 relative">
                    <img
                      src={item.productImage}
                      alt="productImage"
                      className="absolute inset-0 w-full p-2 h-full object-cover"
                    />
                  </div>
                  <div className="flex-auto p-1">
                    <div className="flex flex-wrap">
                      <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {item.title}
                      </h1>
                      <div className="text-lg font-semibold mx-2 text-slate-600">
                        ${item.price}
                      </div>
                      <div className="w-full flex-none text-sm font-medium italic text-slate-700 mt-2">
                        Brand :{item.brand}
                      </div>
                    </div>
                    <div className="flex items-baseline mt-3 mb-6 pb-4 border-b border-slate-200 w-auto">
                      <div className="space-x-2 flex text-sm">
                        {item.descriptions}
                      </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                      <div className="flex-auto flex space-x-4">
                        <button
                          className="h-9 px-3 font-semibold rounded-md bg-red-600 text-white"
                          onClick={() => remove(item._id)}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                    <p className="text-sm p-1 text-slate-700">
                      Free shipping on all continental US orders.
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="w-full flex justify-start p-1 bg-slate-200 mt-2">
          <div className="bg-slate-200 w-[90%] rounded-md p-1">
            <h1 className="font-extrabold text-3xl mt-8">you cart Details</h1>
            {data &&
              data.map((ele) => {
                return (
                  <div key={ele._id} className="w-full">
                    <div className="flex justify-between p-1">
                      <p className="font-bold">item:-{ele.title} </p>
                      <p className="w-[35%] h-10 text-center border-2 border-black p-2 rounded-lg">
                        ${ele.price + 10.5}
                      </p>
                    </div>
                  </div>
                );
              })}
            <div className="flex justify-between p-1">
              <p className="font-bold">Shaping_Amount </p>
              <p className="w-[35%] h-10 text-center border-2 border-black p-2 rounded-lg">
                $10.5
              </p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Total Amount </p>
              <p className="w-[35%] h-10 text-center border-2 border-black p-2 rounded-lg"></p>
            </div>
            <div className="flex justify-between p-1">
              <button className="font-bold bg-sky-950 p-2 text-white rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};
export default Cart;
