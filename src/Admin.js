import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Add from "./Add";
import Delete from "./Delete";
import { useState,useEffect } from "react";
import  "./admin.css"

export default function Admin(){
const [Product,SetProducts]=useState([]);
useEffect(() => {
  fetch("http://localhost:9000/products")
    .then((response) => response.json())
    .then((data) => SetProducts(data));
}, [])

const DeletePro=(id)=>{
fetch(`http://localhost:9000/products/${id}`,{method:"Delete"}).then((res)=>res.json()).then((data)=>{ fetch("http://localhost:9000/products")
  .then((response) => response.json())
  .then((data) => SetProducts(data));})
  
}
return(
    <>
  
<div className="row">
    <div className="col-2 back">
<ul >
    <li><Link  to="/add">Add New Item</Link></li>
    <li><Link to="/delete">Delete Item</Link></li>
</ul>
    </div>
    <div className="col-10">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">description</th>
      <th scope="col">Catigories</th>
      <th scope="col">price</th>
    
    </tr>
  </thead>
  <tbody>
  {Product.map((elm)=>{
    return(
      <tr>
      <th scope="row">{elm.id}</th>
      <td>{elm.title}</td>
      <td>{elm.description}</td>
      <td>{elm.category}</td>
      <td>{elm.price}</td>
      <button className="btn btn-danger" onClick={()=>{
        DeletePro(elm.id)
      }}>Delete</button>
    </tr>

    )
  })}
  </tbody>
</table>
    </div>
</div>
</>

)


}