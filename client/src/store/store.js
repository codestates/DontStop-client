import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/index";

export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;

// import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "../features/counter/counterSlice";

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// });

// import { compose, createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducer/index.js";
// import thunk from "redux-thunk";

// // TODO 필요한 Middleware는 배열 안에 넣으세요.
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // Chrome Redux Extension 활성화
// const composeEnhancers = devTools || compose;
// const middlewares = [thunk];

// // Store Initialization
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(...middlewares))
// );

// export default store;
