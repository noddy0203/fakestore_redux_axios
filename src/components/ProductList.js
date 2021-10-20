import React, { useEffect } from 'react'
import ProductComponent from "./ProductComponent"
import { setProduct } from '../redux/actions/actionCreator'
import {useDispatch} from "react-redux"
import axios from "axios"

const ProductList = () => {


const dispatch = useDispatch()
const fetchProducts = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products").catch(err=>console.log(err))
    dispatch(setProduct(response.data))
}

useEffect(()=>{
    fetchProducts()
}, [])


    return (
        <>
            <div className="container">
               <ProductComponent />
            </div>
        </>
    )
}

export default ProductList
