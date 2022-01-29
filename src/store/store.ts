import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { drawerReducer } from "./reducers/Drawer";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
