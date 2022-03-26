import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProdvider } from "./context/product-context"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductContextProdvider>
    <App />  
    </ProductContextProdvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
