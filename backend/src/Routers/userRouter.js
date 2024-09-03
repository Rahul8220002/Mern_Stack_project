import express from "express";
import {
  changePassword,
  getuserProfile,
  login,
  logout,
  register,
  removeUser,
} from "../controllers/userController.js";

import verifytoken from "../middlerware/auth.js";

const userRouter = express.Router();

userRouter.post("/userRegister", register);
userRouter.post("/userlogin", login);
userRouter.get("/userlogout", verifytoken, logout);
userRouter.get("/userget", verifytoken, getuserProfile);
userRouter.post("/changepassword", verifytoken, changePassword);
userRouter.delete("/delete", verifytoken, removeUser);

export default userRouter;
