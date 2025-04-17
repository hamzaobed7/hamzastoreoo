
import { useState, useEffect } from "react";
export default function Add() {
  const [Products, SetProducts] = useState([]);
  const [id,Setid] = useState("");
  const [title, Settitle] = useState("");
  const [price, Setprice] = useState(0);
  const [description, Setdic] = useState("");
  const [category, Setcaty] = useState("");
  const [image, Setimag] = useState("");
  const api_url = "http://localhost:9000/products";
 
  const Add = () => {
    fetch(api_url, { method: "POST",
        body:JSON.stringify({
            id:id,
            title:title,
            price:price,
            description:description,
            
            category:category,
            imag:image
        }
        )
     }).then(res=>res.json()).then(data=>{})
     
  };
  return (
    <form className="row g-3" style={{ width: "95%", padding: "20px" }}>
      <div className="col-md-6">
        <label className="form-label">ID</label>
        <input type="text" className="form-control" id="inputEmail4" onChange={(e)=>{Setid(e.target.value)}} />
      </div>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        <input type="text" className="form-control" id="inputPassword4"  onChange={(e)=>{Settitle(e.target.value)}} />
      </div>
      <div className="col-3">
        <label className="form-label">price</label>
        <input type="number" className="form-control" id="inputAddress"  onChange={(e)=>{Setprice(e.target.value)}} />
      </div>
      <div className="col-12">
        <label className="form-label">description</label>
        <input type="text" className="form-control" id="inputAddress2"  onChange={(e)=>{Setdic(e.target.value)}}/>
      </div>
      <div className="col-md-6">
        <label className="form-label">Catygoris</label>
        <input type="text" className="form-control" id="inputCity"  onChange={(e)=>{Setcaty(e.target.value)}} />
      </div>

      <div className="col-md-12">
        <label className="form-label">image</label>
        <input type="text" className="form-control"  onChange={(e)=>{Setimag(e.target.value)}} />
      </div>

      <div className="col-12">
        <button
          className="btn btn-primary"
          onClick={() => {
            Add();
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
