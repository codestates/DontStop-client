import { combineReducers } from "redux";
import loginStatusReducer from "./loginStatusReducer";
import userInfoReducer from "./userInfoReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginStatusReducer", "userInfoReducer"],
};

const rootReducer = combineReducers({
  loginStatusReducer,
  userInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
