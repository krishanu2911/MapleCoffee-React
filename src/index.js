import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProdvider } from "./context/product-context"
import { UserDetailContextProvider } from "./context/userdetail-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserDetailContextProvider>
    <ProductContextProdvider>
    <App />  
    </ProductContextProdvider>  
    </UserDetailContextProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
