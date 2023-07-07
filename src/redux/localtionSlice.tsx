import { createSlice } from "@reduxjs/toolkit";

let initialToken;
if (typeof window !== "undefined") {
  initialToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
}
export const locationSlice = createSlice({
  name: "location",
  initialState: {
    token: initialToken,
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removeToken : (state) => {
      state.token = ""
      localStorage.removeItem("token")
    }
  },
});

export const {updateToken,removeToken } =
  locationSlice.actions;

export default locationSlice.reducer;
