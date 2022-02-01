import { createSlice } from "@reduxjs/toolkit";

const width: number = window.innerWidth;
const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    open: true,
  },
  reducers: {
    UPDATE_DRAWER(state, action) {
      state.open = !state.open;
    },
  },
});

export const drawerReducer = drawerSlice.reducer;
export const drawerActions = drawerSlice.actions;
