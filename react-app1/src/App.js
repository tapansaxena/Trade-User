import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mcx from "./pages/mcx/Mcx";
import SellMcx from "./pages/sellMcx/sellMcx";
import BuyMcx from "./pages/buyMcx/buyMcx";
import SellNse from "./pages/sellNse/sellNse";
import BuyNse from "./pages/buyNse/buyNse";
import Nse from "./pages/nse/Nse";
import Trades from "./pages/trades/Trades";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/mcx" element={<Mcx />} />
          <Route path="/nse" element={<Nse />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/sellMcx/:id" element={<SellMcx />} />
          <Route path="/buyMcx/:id" element={<BuyMcx />} />
          <Route path="/sellNse/:id" element={<SellNse />} />
          <Route path="/buyNse/:id" element={<BuyNse />} />
          <Route path="/users" element={<UserList />} />
          {/* <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;