import { store } from "../store";
import { drawerActions } from "../reducers/Drawer";

const { dispatch } = store;

export const updateDrawer = () => {
  dispatch(drawerActions.UPDATE_DRAWER({}));
};
