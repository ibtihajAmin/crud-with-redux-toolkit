import { createSlice } from "@reduxjs/toolkit";
import { studentList } from "../data/data";

const studentSlice = createSlice({
  name: "student",
  initialState: studentList,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
