import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, DOB, password, role } =
      req.body;
    if (
      firstName === "" ||
      email === "" ||
      mobile === "" ||
      DOB === "" ||
      password === "" ||
      role === ""
    ) {
      return res.status(401).json({
        message: "all field are required",
        success: false,
      });
    }
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(401).json({
        message: "email allready exist",
        success: false,
      });
    }

    const user = await User.create({
      firstName,
      lastName: lastName,
      email,
      mobile,
      DOB,
      password,
      role,
    });

    const createuser = await User.findById(user._id).select("-password");
    if (!createuser) {
      return res.status(401).json({
        message: "something went wrong user not register",
        success: false,
      });
    }

    return res.status(200).json({
      message: "user register successfully",
      success: true,
      createuser,
    });
  } catch (error) {
    res.status(501).json({
      message: "internet error",
      error,
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { role, email, password } = req.body;
    if (role === "" || email === "" || password === "") {
      return res.status(401).json({
        message: "all feild required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "email or password invaild",
        success: false,
      });
    }

    const commparePassword = await user.correctPassword(password);
    if (!commparePassword) {
      return res.status(401).json({
        message: "email or password invaild",
        success: false,
      });
    }

    if (user.role !== role) {
      return res.status(401).json({
        message: "invaild user role",
        success: false,
      });
    }

    const Generatetoken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_TOKEN_SECERT,
      {
        expiresIn: process.env.JWT_TOKEN_EXPIRES,
      }
    );
    const sendedUser = await User.findOne({ email: user.email })
      .select("-password")
      .select("-_id");

    const options = {
      httponly: true,
      secure: true,
    };

    res.status(200).cookie("Token", Generatetoken, options).json({
      message: "user login successfully",
      success: true,
      sendedUser,
    });
  } catch (error) {
    return res.status(501).json({
      message: "server is down, please try again later",
      success: false,
    });
  }
};

const logout = async (req, res) => {
  try {
    const options = {
      httponly: true,
    };

    return res.status(200).cookie("Token", null, options).json({
      message: "user logout successfully",
      success: true,
    });
  } catch (error) {
    return res.status(501).json({
      message: error.message,
      success: false,
    });
  }
};

const getuserProfile = (req, res) => {
  try {
    const user = req.user;
    return res
      .status(200)
      .json({ message: "user get successfully", success: true, user });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "user does not exist", success: false });
  }
};

const forgotpassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(200).json({
      message: "email required",
      success: false,
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(200).json({ message: "invaild email ", success: false });
  }

  const resetToken = await user.generatePasswordtoken();
  await user.save();
};

const resetpassword = async (req, res) => {};

const changePassword = async (req, res) => {
  try {
    const { password, newpassword } = req.body;
    if (password === "" || newpassword === "") {
      return res.status(401).json({
        message: "all fields required",
        success: false,
      });
    }
    const existuser = await User.findById(req.user);

    const ispasswordcorrect = await existuser.correctPassword(password);

    if (!ispasswordcorrect) {
      return res.status(401).json({
        message: "invaild password",
        success: false,
      });
    }
    existuser.password = newpassword;
    await existuser.save({ validateBeforeSave: false });

    return res.status(200).json({
      message: "password change successfully",
      success: true,
      newpassword,
    });
  } catch (error) {
    return res.status(501).json({
      message: error.message,
      success: false,
    });
  }
};

const removeUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete(req.user);
    if (!user) {
      return res.status(401).json({ message: "failed", success: false });
    }
    return res
      .status(200)
      .json({ message: "user delete successfully", success: true });
  } catch (error) {
    return res.status(501).json({ message: "network error", success: false });
  }
};

export {
  register,
  login,
  logout,
  getuserProfile,
  changePassword,
  forgotpassword,
  resetpassword,
  removeUser,
};
