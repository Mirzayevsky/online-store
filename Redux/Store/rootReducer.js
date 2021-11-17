import {combineReducers} from "redux";
import  {getProductReducer} from "../Modules/GetProduct/getProductReducer";
import { deleteReducer } from "../Modules/deleteData/deleteReducer";
export  const rootReducer =combineReducers(
    {
        getProductReducer,
        deleteReducer
    }
)