import { createSlice } from "@reduxjs/toolkit";
import { Data, IFolder } from "../../constants/data";

const initialState = {
  value: Data as Array<IFolder>,
  step: 1 as number,
};

export const folderSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getData: (state: any) => {
      return state.value;
    },
    increment: (state) => {
      state.step += 1;
    },
    decrement: (state) => {
      state.step -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getData, increment, decrement } = folderSlice.actions;

export default folderSlice.reducer;
