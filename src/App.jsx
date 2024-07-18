import "preline/preline"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Order from "./pages/Order";
import Delivery from "./pages/Delivery";
import Customer from "./pages/Customer";
import Discount from "./pages/Discount";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={(<Login/>)}/>
          <Route path="/dashboard" element={(<Dashboard/>)}/>
          <Route path="/product" element={(<Product/>)}/>
          <Route path="/product/create" element={(<CreateProduct/>)}/>
          <Route path="/product/edit/:id" element={(<EditProduct/>)}/>
          <Route path="/customer" element={(<Customer/>)}/>
          <Route path="/delivery" element={(<Delivery/>)}/>
          <Route path="/discount" element={(<Discount/>)}/>
          <Route path="/order" element={(<Order/>)}/>
          <Route path="/*" element={(<NotFound/>)}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
