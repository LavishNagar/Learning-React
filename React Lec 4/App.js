// import {createElement as ce} from "react";
// import  ReactDOM  from "react-dom/client";



// const navbar=ce("div",
//    {className:"header"}

// ,ce("h1",{id:"h1"},"Nameste React"),
// ce("ul",null,("I am Ul tag"),ce("li",{id:"list 1"},"About us"),ce("li",null,"contact us")));

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(navbar);



// create element by jsx 
//jsx uses babel for identify html like structure 
//jsx => ReactElement => object -=> HTML(DOM)

import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading=<h1 id="h1" className="h1" style={{color:'red'}}>
//     This is heading 1 which is created by jsx
//     </h1>


//types of componenet in react   (1)=>functional component      (2)=> class-Base componenet

var Heading = ()=>{
    return(
    <h1>I am a react element</h1>
);}
 var xyz=10;
// {/* componenet composition */}
const Component = ()=> {

   
return(<div>

    {xyz}
   { console.log(xyz)}
    {console.log("hellow everyone")}
   
    
    {Heading()}
    <h1>I am inside the function </h1>
    <h2>I am inside the heading 2</h2>
  </div>
 );
 
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component/>);






