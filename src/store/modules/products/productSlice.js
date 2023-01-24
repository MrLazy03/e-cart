import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import STATUS from "../../constants";

const initialState = {
  productList: [],
  loading: STATUS.IDLE,
  error: null,
};

export const fetchProducts = createAsyncThunk("movies/fetchMovies", async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c6272106eamsh57e731f9bb54416p121c1ejsn4dfc648bd5d1",
      "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
    },
  };

  const data = await fetch(
    "https://dummyjson.com/products",
    options
  ).then((data) => data.json());
  return data;
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList.push(action.payload.products);
      state.loading = STATUS.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = STATUS.FAILED;
      state.error = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = STATUS.PENDING;
    });
  },
});

export const productReducer = productSlice.reducer;
