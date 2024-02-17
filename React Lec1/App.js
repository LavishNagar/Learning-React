const heading1=React.createElement("h1",{
    id:"h1tag",className:"tag",
    style:{color:"red"}
},"Nameste Eveeryone");
const heading2=React.createElement("h1",
   null
,"Good morning everyone!");

const container=React.createElement("div",{id:"container"},[heading1,heading2]);
// always pass multiple childs in an array
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(container);
root.render(container);