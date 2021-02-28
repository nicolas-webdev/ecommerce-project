//Redux Store

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

//通常は開発中にしかLoggerを使いたくない
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

//ですが、
//Reduxで何がどう変わってるのかを御覧いただけるように残します
const middlewares = [logger];

//ストアの状態をローカルストレージで保存
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
const Store = { store, persistor };

export default Store;
