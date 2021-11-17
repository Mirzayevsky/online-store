import axios from "axios";

export  const deleteAction = (id) =>(
    {
        type: "DELETE_DATA",
        payload: axios.delete("https://store-management-backend-app.herokuapp.com/api/v1/product/" +id)
    }
)