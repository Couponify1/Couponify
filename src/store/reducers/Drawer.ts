import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    open: false,
  },
  reducers: {
    UPDATE_DRAWER(state, action) {
      state.open = !state.open;
    },
  },
});

export const drawerReducer = drawerSlice.reducer;
export const drawerActions = drawerSlice.actions;
