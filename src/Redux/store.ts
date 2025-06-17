import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import accountReducer from "./ui/accountSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
