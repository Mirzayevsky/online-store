const defaultValue = {
    loading:false,
    error:false,
    success:false,
    getData:[]
}
export  const getProductReducer = (state = defaultValue, action )=>{
    switch (action.type){
        case "GET_PRODUCT_PENDING":
            return(
                {
                    loading: true,
                    error: false,
                    success: false,
                    getData: []
                }
            )

        case  "GET_PRODUCT_FULFILLED":
            return (
                {
                    loading: false,
                    error: false,
                    success: true,
                    getData: action.payload.data
                }
            )
        case  "GET_PRODUCT_REJECTED":
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