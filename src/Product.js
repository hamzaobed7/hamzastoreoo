import { Link } from "react-router-dom";
import "./Slider.css";
import { useState } from "react";
export default function Product(props){
  
return(
    <>
    <div className="card">
              <img src={props.pro.image} className="card-img-top iim" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.pro.title}</h5>
                <p className="card-text">
              {
                props.disc && <p>{props.pro.description}</p>
              }
                </p>
                {props.show && <Link to={`/products/${props.pro.id}`} className="btn btn-primary">
                  Go somewhere
                </Link>
                }
                {
                  props.pri&&<h4>{props.pro.price}$</h4>
                }
              </div>
            </div>
    
    </>
)

}