// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hello World from React!"
// );

// console.log(heading); // this will log the object, not the tag element.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//--------------------------------------

// parent
// Child
// h1

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         React.createElement(
//             "h1",
//             { },
//             "I'm an h1 tag!"
//         )
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//----------------------------------------------
    // <div id="root">
    //     <div id="parent">
    //         <div id="child">
    //             <h1>I'm an h1 tag!</h1>
    //             <h2>I'm an h2 tag!</h2>
    //         </div>
    //     </div>
    // </div>

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         [ React.createElement( "h1", { }, "I'm an h1 tag!"), React.createElement( "h2", { }, "I'm an h2 tag!")]  //create an array if you want to add multiple tags inside a div
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//-----------------------
    // <div id="root">
    //     <div id="parent">
    //         <div id="child">
    //             <h1>im h1 tag</h1>
    //             <h2>im h2 tag</h2>
    //         </div>
    //         <div id="child2">
    //             <h1>im h1 tag</h1>
    //             <h2>im h2 tag</h2>
    //         </div>
    //     </div>
    // </div>
const parent = React.createElement("div", { id: "parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "im  h1 tag"),
        React.createElement("h2", {}, "im h2 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "im  h1 tag"),
        React.createElement("h2", {}, "im h2 tag")
    ])
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

