import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCourses: [],
  cartPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCourse(state, action) {
      state.cartCourses = [...state.cartCourses, action.payload];
    },
    deleteCourse(state, action) {
      state.cartCourses = state.cartCourses.filter(
        (course) => course["id"] !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { addCourse, deleteCourse } = cartSlice.actions;
