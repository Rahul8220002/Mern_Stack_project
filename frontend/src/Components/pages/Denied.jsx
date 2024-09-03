import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Denied = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[90vh] flex justify-center items-center bg-cyan-700">
        <section className="w-[75%] h-[80vh] bg-white flex justify-center items-center flex-col gap-3 border rounded-lg">
          <h1 className="text-6xl font-extrabold">403</h1>
          <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
          <div className="text-base flex justify-center items-center flex-col">
            <p>Sorry, but you do not have permission to access this page.</p>
            <span className="text-yellow-800">
              you can go back to{" "}
              <Link to={navigate(-1)} className="text-sky-900 font-bold">
                Previous page
              </Link>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};
export default Denied;
