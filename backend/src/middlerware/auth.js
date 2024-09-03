import jwt from "jsonwebtoken";
import { User } from "../model/userModel.js";

const verifytoken = async (req, res, next) => {
  const token =
    req.cookies?.Token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      message: "invaild user",
      sucess: false,
    });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_TOKEN_SECERT);
    // req.user = { id: decodeToken.id, email: decodeToken.email };
    const userdata = await User.findById(decodeToken.id).select("-password");

    if (!userdata) {
      return res.status(401).json({
        message: "invaild user token",
        sucess: false,
      });
    }
    req.user = userdata;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "invaild token",
      sucess: false,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  const { email } = req.user;
  const adminuser = await User.findOne({ email }).select("-password");

  if (adminuser.role !== "Admin") {
    return res.status(401).json({
      message: "you are not admin",
      sucess: false,
    });
  } else {
    next();
  }
};

export default verifytoken;
