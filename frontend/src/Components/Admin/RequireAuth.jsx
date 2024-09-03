import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Denied from "../pages/Denied";

const RequireAuth = ({ isAllowed }) => {
  const adminrole = useSelector((state) => state.auth?.data?.role);

  return (
    <>
      {adminrole === isAllowed ? (
        <Outlet>
          <AdminNavbar />
        </Outlet>
      ) : (
        <Denied />
      )}
    </>
  );

  // return isLoggedIn && isAllowed.find((myRole) => myRole === role) ? (
  //   <Outlet />
  // ) : isLoggedIn ? (
  //   <Navigate to="/denied" />
  // ) : (
  //   <Navigate to="/signin" />
  // );
};
export default RequireAuth;
