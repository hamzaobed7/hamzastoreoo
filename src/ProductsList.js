import { useState, useEffect } from "react";
import Product from "./Product";
export default function ProductsList() {
  const [Products, SetProducts] = useState([]);
  const api_url = "http://localhost:9000/products";
  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => SetProducts(data));
  }, []);
  return (
    <>
      <h1 className="text-center">Our Products</h1>

      <div className="container">
        <div className="row ">
          {Products.map((elm) => {
            
            return (
              <div className="col-4" key={elm.id}>
                <Product pro={elm} show={true} pri={false} disc={false}></Product>
              </div>
            );
            
          })}
        </div>
      </div>
    </>
  );
}
