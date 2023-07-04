import { createSlice } from "@reduxjs/toolkit";
import { studentList } from "../data/data";

const studentSlice = createSlice({
  name: "students",
  initialState: studentList,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      const { id, name, email, roll, fav_subject } = action.payload;
      const sf = state.find((student) => student.id == id);
      if (sf) {
        sf.name = name;
        sf.email = email;
        sf.roll = roll;
        sf.fav_subject = fav_subject;
      }
    },
    deleteStudent: (state, action) => {
      const { id } = action.payload;
      const sf = state.find((student) => student.id == id);
      if (sf) {
        return state.filter((s) => s.id !== id);
      }
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
