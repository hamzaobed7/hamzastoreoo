import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import Product from "./Product";
import "./product.css";
export default function ProductDetils(){
    const prams=useParams();
    const [Products, SetProducts] = useState([]);
      const api_url = "http://localhost:9000/products";
      useEffect(() => {
        fetch(`${api_url}/${prams.proId}`)
          .then((response) => response.json())
          .then((data) => SetProducts(data));
      }, []);
return(
    <>
    <Product pro={Products} show={false} pri={true}disc={true} ></Product>
    </>
)


}