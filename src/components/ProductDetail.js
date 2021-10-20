import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { selectedProduct } from "../redux/actions/actionCreator";

const ProductDetail = () => {

const dispatch = useDispatch()
const product = useSelector(state=>state.productDetail)
// const {description , image, title, price, category, rating} = product
// console.log(description)
  const { productId } = useParams();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log(error));
      dispatch(selectedProduct(response.data))
      console.log(response.data)
  };

useEffect(()=>{
if(productId && productId !== ""){
      fetchProductDetail()
}
}, [productId])
  return (
    <>
    {
      Object.keys(product).length === "" ? (<div>....Loading Data</div>):( <div
        className="card mb-3 mt-5 offset-3"
        style={{ minHeight: "350px", maxWidth: "50%" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">desc</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
                <li className="list-group-item"></li> 
                <li className="list-group-item"></li>
              </ul>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>)
    }
     
    </>
  );
};

export default ProductDetail;
