export const setProduct = (product)=>{
    return {
        type:"SET_PRODUCT",
        payload:product
    }
}

export const selectedProduct = (product)=>{
    return {
        type:"SELECTED_PRODUCT",
        payload:product
    }
}