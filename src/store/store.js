import { configureStore } from "@reduxjs/toolkit";
import mapPanelSlice from "./slices/MapPanel.js";
import languageSlice from "./slices/Language.js";
import  HomePageVisibility  from "./slices/HomePageVisibility.js";

export default configureStore({
  reducer: {
    // cunter: counterReducer,
    // tour: changeSlice
    language: languageSlice,
    mapPanel: mapPanelSlice,
    visibilityIndex: HomePageVisibility,
  },
});
