import NavBar from "./NavBar";
import Slider from "./Slider";
import ProductsList from "./ProductsList";
import { Route,Routes,Link } from "react-router-dom";
import About from "./About";
import ProductDetils from "./ProductDetils";
import Admin from "./Admin";
import Add from "./Add";
import Delete from "./Delete";
function App() {
  return (
    <div className="App">
   <div className="">
  
    <NavBar></NavBar>
   <Routes>
<Route path="/"
element={
  <>
<Slider></Slider>
  <ProductsList></ProductsList>
  </>
  }/>


  <Route path="about" element={<About/>} />
  <Route path="admin" element={<Admin/>} />
  <Route path="add" element={<Add/>} />
  <Route path="delete" element={<Delete/>} />
  <Route path="products/:proId" element={<ProductDetils/>} />
 

   </Routes>
   </div>
    </div>
  );
}

export default App;
