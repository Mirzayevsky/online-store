import{createStore,applyMiddleware,compose} from "redux";
import {rootReducer} from "./rootReducer";
import promise from "redux-promise-middleware";
const middlewares =[promise]
export  const store =compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
