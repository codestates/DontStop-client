import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/index";

export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default { store, persistor };

// import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "../features/counter/counterSlice";

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// });
