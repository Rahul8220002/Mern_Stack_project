import { Product } from "../model/productModel.js";
import { avatarUploadCloudinary } from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const {
      title,
      descriptions,
      price,
      category,
      quantity,
      brand,
      productImage,
    } = req.body;

    const userId = req.user.id;

    if (
      title === "" ||
      descriptions === "" ||
      price === "" ||
      category === "" ||
      quantity === "" ||
      brand === "" ||
      productImage === ""
    ) {
      return res.status(401).json({
        message: "product details required",
        success: false,
      });
    }
    const localproductimagePath = req.file.path;

    if (!localproductimagePath) {
      return res.status(401).json({
        message: "image is required",
        success: false,
      });
    }

    const productimage = await avatarUploadCloudinary(localproductimagePath);
    if (!productimage) {
      return res.status(401).json({
        message: "localproductimagePath does not upload cloudinary",
        success: false,
      });
    }

    const product = await Product.create({
      title,
      descriptions,
      price,
      category,
      quantity,
      brand,
      productImage: productimage.secure_url,
      create_By: userId,
      ratings: userId,
    });

    const productDetails = await Product.findById(product._id);
    if (!productDetails) {
      return res.status(502).json({
        message: "something went wrong",
        success: false,
      });
    }

    return res.status(200).json({
      message: "productDetails Add successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internet error",
      success: false,
    });
  }
};

const getAllproductDetails = async (req, res) => {
  try {
    const allProduct = await Product.find();
    if (!allProduct) {
      return res.status(401).json({
        message: "don't have any product",
        success: false,
      });
    }
    return res.status(200).json({
      message: "all product Details",
      success: true,
      allProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internet error",
      success: false,
    });
  }
};

const getourProduct = async (req, res) => {
  const userId = req.user.id;
  try {
    const product = await Product.find({ create_By: userId });
    if (!product) {
      return res.status(400).json({
        message: "you don't have any product",
        success: true,
      });
    }
    return res.status(201).json({
      message: "all product Details",
      success: true,
      product,
      count: product.length,
    });
  } catch (error) {
    return error;
  }
};

const getallproduct = async (req, res) => {
  const serchkeyword = req.query.serchkeyword || "";
  const query = {
    $or: [
      { title: { $regex: serchkeyword, $options: "i" } },
      { descriptions: { $regex: serchkeyword, $options: "i" } },
    ],
  };
  const productdetail = await Product.find(query);
  return res
    .status(200)
    .json({ success: true, productdetail, count: productdetail.length });
};

const getOneproductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const allProduct = await Product.findById(id);
    if (!allProduct) {
      return res.status(401).json({
        message: "don't have any product",
        success: false,
      });
    }
    return res.status(200).json({
      message: "product Details",
      success: true,
      allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internet error",
      success: false,
    });
  }
};

const UpdateProductImage = async (req, res) => {
  try {
    const { id } = req.params;
    const avatarlocal = req?.file?.path;
    if (!avatarlocal) {
      return res
        .status(401)
        .json({ message: "image is required", success: false });
    }
    const updateitemimage = await Product.findById(id);

    const currentAvatar = updateitemimage?.productImage;
    if (currentAvatar) {
      await cloudinary.uploader.destroy(currentAvatar);
    }

    const productimage = await avatarUploadCloudinary(avatarlocal);
    if (!productimage) {
      return res.status(401).json({
        message: "localproductimagePath does not upload cloudinary",
        success: false,
      });
    }

    const iteamUpdate = await Product.findByIdAndUpdate(
      updateitemimage,
      {
        $set: {
          productImage: productimage.secure_url,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "image update successfully",
      success: true,
      iteamUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internet error",
      success: false,
    });
  }
};

const UpdateItemDetailslist = async (req, res) => {
  const id = req.params.id;
  const { title, descriptions, price, category, quantity, brand } = req.body;
  if (
    title === "" ||
    descriptions === "" ||
    price === "" ||
    category === "" ||
    quantity === "" ||
    brand === ""
  ) {
    return res.status(401).json({
      message: "product details required",
      success: false,
    });
  }
  const updateproduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  return res.status(200).json({
    message: "update successfully",
    success: true,
    updateproduct,
  });
};
const DeleteProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const allProduct = await Product.findByIdAndDelete(id);
    if (!allProduct) {
      return res.status(401).json({
        message: "don't have any product",
        success: false,
      });
    }
    return res.status(200).json({
      message: "product Delete",
      success: true,
      allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internet error",
      success: false,
    });
  }
};

export {
  addProduct,
  getAllproductDetails,
  getallproduct,
  getOneproductDetails,
  UpdateProductImage,
  DeleteProductDetails,
  UpdateItemDetailslist,
  getourProduct,
};
