import React from "react";

// Components
import Login from "./Components/Views/Auth/Login";
import Register from "./Components/Views/Auth/Register";
import Cart from "./Components/Views/Cart/Cart";
import Homepage from "./Components/Views/Homepage/Homepage";
import Product from "./Components/Views/Product/Product";
import ProductList from "./Components/Views/ProductList/ProductList";

// Router And Store
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";

// Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/product/:id"} element={<Product />} />
          <Route path={"/products"} element={<ProductList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
