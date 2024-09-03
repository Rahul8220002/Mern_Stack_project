import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import store from "./Components/app/store.js";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading....</h1>}>
        <App />
      </Suspense>

      <Toaster />
      {/* <ToastContainer position="top-center" autoClose={5000} /> */}
    </BrowserRouter>
  </Provider>
);
