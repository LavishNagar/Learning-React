import React from "react";
import ReactDOM from "react-dom/client";

import {Header} from "./components/Header";
import {Footer} from "./components/footer";
import Body from "./components/body";



const Foodapp = () => {
  return(<> <Header/>
    <Body/>
    <Footer/></>
   
   )
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Foodapp />);
