import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      <div className="row">
        {products.map((el) => {
          const { id, title, price, description, category, image, rating } = el;
          return (
            <div className="col-sm-4" key={id}>
              <Link to={`/product/${id}`}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Title- {title}</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Category- {category}</li>
                      <li className="list-group-item">Price- {price}$</li>
                      <li className="list-group-item">
                        Ratings- {rating.rate}/5 rated by- {rating.count} people
                      </li>
                    </ul>
                    <hr />
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductComponent;
