import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Header = lazy(() => import("./Components/pages/Header"));
const About = lazy(() => import("./Components/pages/About"));
const ProductCart = lazy(() => import("./Components/pages/ProductCart"));
const Service = lazy(() => import("./Components/pages/Service"));
const Contacts = lazy(() => import("./Components/pages/Contacts"));
const NotFound = lazy(() => import("./Components/pages/NotFound"));
const Footer = lazy(() => import("./Components/pages/Footer"));
const SignIn = lazy(() => import("./Components/auth/SignIn"));
const SignUp = lazy(() => import("./Components/auth/SignUp"));
const ProductDetails = lazy(() => import("./Components/pages/ProductDetails"));
const RequireAuth = lazy(() => import("./Components/Admin/RequireAuth"));
const Denied = lazy(() => import("./Components/pages/Denied"));
const AdminNavbar = lazy(() => import("./Components/Admin/AdminNavbar"));
const AdminAddProduct = lazy(() =>
  import("./Components/Admin/AdminAddProduct")
);
const GetourProduct = lazy(() => import("./Components/Admin/GetourProduct"));
const Rating = lazy(() => import("./Components/Admin/Rating"));
const AdminUpdateProduct = lazy(() =>
  import("./Components/Admin/AdminUpdateProduct")
);
const Profile = lazy(() => import("./Components/auth/Profile"));
import { useDispatch } from "react-redux";
import { GetUser } from "./Components/app/feature/authSlice";
import Cart from "./Components/pages/Cart";
function App() {
  // const { data } = useSelector((state) => state.auth);
  const disptch = useDispatch();
  const getuserdata = async () => {
    await disptch(GetUser());
  };
  if (localStorage.getItem("token_id")) {
    getuserdata();
  }

  if (!document.cookie) {
    localStorage.clear();
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Service />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<RequireAuth isAllowed={"Admin"} />}>
          <Route path="/require/admin" element={<AdminNavbar />} />
          <Route path="/denied" element={<Denied />} />
          <Route path="/addproduct" element={<AdminAddProduct />} />
          <Route path="/updateproduct/:id" element={<AdminUpdateProduct />} />
          <Route path="/My Product" element={<GetourProduct />} />
        </Route>
        <Route path="/product details" element={<ProductDetails />} />
        <Route path="/shop" element={<ProductCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
