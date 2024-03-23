import { configureStore } from "@reduxjs/toolkit";
import mapPanelSlice from "./slices/MapPanel.js";
import languageSlice from "./slices/Language.js";
import  HomePageVisibility  from "./slices/HomePageVisibility.js";
import UserSlice from "./slices/User.js";

export default configureStore({
  reducer: {
    user: UserSlice,
    language: languageSlice,
    mapPanel: mapPanelSlice,
    visibilityIndex: HomePageVisibility,
  },
});
