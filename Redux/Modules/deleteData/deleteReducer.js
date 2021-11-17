import {useDispatch} from "react-redux";
import {getProductAction} from "../GetProduct/getProductAction";

const defaultValue = {
    loading:false,
    error:false,
    success:false,
    data:[]
}

export  const deleteReducer = (state = defaultValue, action )=>{
    switch (action.type){
        case "DELETE_DATA_PENDING":
            return(
                {
                    loading: true,
                    error: false,
                    success: false,
                    data: []
                }
            )

        case  "DELETE_DATA_FULFILLED":

            return (
                {
                    loading: false,
                    error: false,
                    success: true,
                    data: action.payload.data
                }
            )
        case  "DELETE_DATA_REJECTED":
            return (
                {
                    loading: false,
                    error: true,
                    success: false,
                }
            )
        default:
            return state;
    }
}