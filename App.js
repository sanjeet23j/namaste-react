import React from "react"
import ReactDOM from "react-dom/client"



// const heading4 = React.createElement(
//     "h2",
//     { id: "rootHeader" },
//     "Hello from External"
// )
// console.log(heading4)
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading4)

const heading5 = React.createElement("div", { id: "parent" },
    React.createElement("div", { class: "child" },
        [
            React.createElement("h1", { id: "hedingTag" }, "This is heading tag"),
            React.createElement("p", { id: "hedingTag" }, "This is heading tag")
        ]))


const rootAll = ReactDOM.createRoot(document.getElementById("root"))

rootAll.render(heading5)

const heading2 = React.createElement("h2", {}, "Hello from Reaact");
const rootEle = ReactDOM.createRoot(document.getElementById("root2"));
rootEle.render(heading2);


// React element 

const heading = (
    <h1 tabIndex="1" className="heading">This is heading </h1>
)

// functaional component 

const component1 = () => {
    return <>
        <p>This is Paragraph component1</p>
    </>
}
const component2 = () => (
    <h1 className="heading"> Namste React component2</h1>
)