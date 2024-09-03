import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

export const AddProduct = createAsyncThunk("cart/addproduct", async (data) => {
  try {
    const res = axiosInstance.post("/addproductDetails", data);
    toast.promise(res, {
      loading: "product Adding please wait !",
      success: ({ data }) => {
        return data?.message;
      },
      error: "failed to create product",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const AllCartDetails = createAsyncThunk("cart/allproduct", async () => {
  try {
    // const res = axiosInstance.get("allProducts");
    const res = axiosInstance.get("/allProducts");

    toast.promise(res, {
      loading: "please wait...",
      success: ({ data }) => {
        return data?.message;
      },
      error: "failed",
    });
    return (await res).data.allProduct;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const GetOurProductDetails = createAsyncThunk(
  "cart/getOurData",
  async () => {
    try {
      const res = axiosInstance.get("/allproductDetails");
      return (await res).data.product;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const UpdateProductItem = createAsyncThunk(
  "cart/update",
  async (data) => {
    try {
      const res = axiosInstance.patch(`/updateitem/${data?.id}`, data);
      console.log(res);

      toast.promise(res, {
        loading: "item updated please wait...",
        success: ({ data }) => {
          return data?.message;
        },
        error: "failed",
      });
      return (await res).data;
    } catch (error) {
      return toast.error(error?.response?.date?.message);
    }
  }
);

export const UpdateImage = createAsyncThunk(
  "cart/updateimage",
  async (data) => {
    console.log("data", data);

    try {
      const res = axiosInstance.patch(
        `updateProductsImage/${data?.ItemImage?.id}`,
        data
      );
      toast.promise(res, {
        loading: "please wait",
        success: ({ data }) => {
          return data?.message;
        },
        error: "failed",
      });
      return (await res).data;
    } catch (error) {
      return error(error?.response?.data.message);
    }
  }
);

export const RemoveItem = createAsyncThunk("cart/remove", async (id) => {
  try {
    const res = axiosInstance.delete(`/deleteProducts/${id}`);
    toast.promise(res, {
      loading: "please wait...",
      success: ({ data }) => {
        return data?.message;
      },
      error: "failed",
    });
    // window.location.assign("/My Product");
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const initialState = {
  createProduct: {},
  getAllProduct: [],
  getOurData: [],
  removeProductData: [],
  updateImageitem: [],
  updateitem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Add product
    builder.addCase(AddProduct.pending, (state) => {
      state.createProduct = false;
    });
    builder.addCase(AddProduct.fulfilled, (state, action) => {
      state.createProduct = action.payload;
    });

    builder.addCase(AddProduct.rejected, (state) => {
      state.createProduct = false;
    });

    //get all product Details

    builder.addCase(AllCartDetails.fulfilled, (state, action) => {
      state.getAllProduct = action.payload;
    });
    //get our product data

    builder.addCase(GetOurProductDetails.pending, (state) => {
      state.getOurData = false;
    });
    builder.addCase(GetOurProductDetails.fulfilled, (state, action) => {
      state.getOurData = action.payload;
    });
    builder.addCase(GetOurProductDetails.rejected, (state) => {
      state.getOurData = false;
    });

    // update image
    builder.addCase(UpdateImage.fulfilled, (state, action) => {
      console.log(action.payload);
      state.updateImageitem = action.payload;
    });

    builder.addCase(UpdateProductItem.fulfilled, (state, action) => {
      state.updateitem = action.payload;
    });

    //remove item
    builder.addCase(RemoveItem.fulfilled, (state, action) => {
      state.removeProductData.filter(
        (productId) => productId.id !== action.payload
      );
    });
  },
});
export default cartSlice.reducer;
