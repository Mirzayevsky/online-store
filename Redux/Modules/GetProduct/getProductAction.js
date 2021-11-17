import axios from "axios";

export  const getProductAction = () =>(
    {
        type: "GET_PRODUCT",
        payload: axios.get("https://store-management-backend-app.herokuapp.com/api/v1/product")
    }
)