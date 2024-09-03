import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance.js";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

// Register user createAsyncThunk
export const RegisterUser = createAsyncThunk("auth/register", async (data) => {
  try {
    const res = axiosInstance.post("/userRegister", data);
    toast.promise(res, {
      loading: "wait! creating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "failed to create account",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// login user with createAsyncThunk

export const Login = createAsyncThunk("auth/login", async (data) => {
  try {
    const res = axiosInstance.post("/userlogin", data);

    toast.promise(res, {
      loading: "Please wait...",
      success: ({ data }) => {
        return data?.message;
      },
      error: "login failed",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

//get user data
export const GetUser = createAsyncThunk("auth/getuser", async () => {
  try {
    const res = axiosInstance.get("/userget");
    toast.promise(res, {
      loading: "please Wait...",
      success: ({ data }) => {
        return data?.success;
      },
      error: "failed",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const ChangePassword = createAsyncThunk("auth/post", async (data) => {
  try {
    const res = axiosInstance.post("/changepassword", data);
    toast.promise(res, {
      loading: "please wait ...",
      success: ({ data }) => {
        return data?.message;
      },
      error: "change passsword failed",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

//logout user

export const Logout = createAsyncThunk("auth/logout", async () => {
  try {
    const res = axiosInstance.get("/userlogout");
    toast.promise(res, {
      loading: "please wait...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "failed",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.res?.data?.message);
  }
});

export const RemoveUserAccount = createAsyncThunk("auth/delete", async () => {
  try {
    const res = axiosInstance.delete("/delete");
    toast.promise(res, {
      loading: "please wait ...",
      success: ({ data }) => {
        return data?.message;
      },
      error: "failed",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const initialState = {
  createUser: null,
  data: false,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RegisterUser.pending, (state) => {
      (state.isLoggedIn = false),
        (state.data = false),
        (state.createUser = false);
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.createUser = action.payload;
    });
    builder.addCase(RegisterUser.rejected, (state) => {
      (state.isLoggedIn = false),
        (state.data = false),
        (state.role = false),
        (state.createUser = false);
    });

    //login user
    builder.addCase(Login.pending, (state) => {
      (state.isLoggedIn = false), (state.data = false), (state.role = false);
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.data = action?.payload?.sendedUser;
      localStorage.setItem("token_id", Math.random());
    });
    builder.addCase(Login.rejected, (state) => {
      (state.data = false), (state.isLoggedIn = false), (state.role = false);
    });
    //getuser
    builder.addCase(GetUser.pending, (state) => {
      (state.data = false), (state.isLoggedIn = false), (state.role = false);
    });
    builder.addCase(GetUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.data = action.payload?.user;
    });
    builder.addCase(GetUser.rejected, (state) => {
      (state.data = false), (state.isLoggedIn = false), (state.role = false);
    });
    //logout user
    builder.addCase(Logout.pending, (state) => {
      (state.data = false), (state.isLoggedIn = false);
      state.role = false;
    });
    builder.addCase(Logout.fulfilled, (state) => {
      localStorage.clear();
      (state.data = null), (state.isLoggedIn = false), (state.role = false);
    });

    builder.addCase(Logout.rejected, (state) => {
      (state.data = false), (state.isLoggedIn = false), (state.role = false);
    });

    //change password
    builder.addCase(ChangePassword.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload;
    });

    //Delete user account
    builder.addCase(RemoveUserAccount.fulfilled, (state) => {
      localStorage.clear();
      (state.data = null), (state.role = false), (state.isLoggedIn = false);
    });
  },
});

export default authSlice.reducer;

//localStorage.setItem("data", JSON.stringify
