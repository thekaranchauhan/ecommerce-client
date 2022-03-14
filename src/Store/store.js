import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./Reducers/Auth";
import { userSlice } from "./Reducers/User";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;
