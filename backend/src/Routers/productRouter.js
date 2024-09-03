import express from "express";
import {
  addProduct,
  DeleteProductDetails,
  getallproduct,
  getAllproductDetails,
  getOneproductDetails,
  getourProduct,
  UpdateItemDetailslist,
  UpdateProductImage,
} from "../controllers/productController.js";
import { upload } from "../middlerware/multer.js";
import verifytoken, { isAdmin } from "../middlerware/auth.js";

const productRouter = express.Router();

productRouter.post(
  "/addproductDetails",
  upload.single("productImage"),
  verifytoken,
  isAdmin,
  addProduct
);

productRouter.get("/allProducts", getAllproductDetails);
productRouter.get("/search", getallproduct);
productRouter.get("/allproductDetails", verifytoken, isAdmin, getourProduct);
productRouter.get("/Products/:id", getOneproductDetails);
productRouter.patch(
  "/updateProductsImage/:id",
  upload.single("productImage"),
  verifytoken,
  isAdmin,
  UpdateProductImage
);
productRouter.patch(
  "/updateitem/:id",
  verifytoken,
  isAdmin,
  UpdateItemDetailslist
);
productRouter.delete(
  "/deleteProducts/:id",
  verifytoken,
  isAdmin,
  DeleteProductDetails
);

export default productRouter;
