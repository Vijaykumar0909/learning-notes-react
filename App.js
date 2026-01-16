import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1", {}, "Namaste React");

const jsxheading = <h1 id="heading">Namaste React 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);

//This is a heading tag inside Functional component that is return with return tag
const MyComponent = () => {
    return <h1>this is a h1 tag!!!</h1>
}

//This is a heading tag using functional component that is returning in a single line
// const HeadingComponent = () => 

const HeadingComponent1 = () => (
    <div id="container">
        <h1>This is a multi line funtional component!</h1>
    </div>
);

root.render(<HeadingComponent1 />);



//component composition -> using a component inside a another component 
const Title = () => <h1>this is a title used in another component!!!</h1>;  
const num = 10000000;
//this is a functional statement which will have a return statement and using {}
const HeadingComponent2 = () => {
    return <div className="container">
        {100 + 200}
        <h1>console.log("consoled");</h1>
        <Title />   
        <h1>This is a heading tag inside functional component!!</h1>
    </div>
};

//writing functional component using () and not using return which will be considered as a single line statement inside () having multi line 
const HeadingComponent3 = () => (
    <div className="container">
        {num}
        <Title />
        <h1>This is a heading tag inside functional component!!</h1>
    </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(<HeadingComponent2 />);