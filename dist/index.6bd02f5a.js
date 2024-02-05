// const heading4 = React.createElement(
//     "h2",
//     { id: "rootHeader" },
//     "Hello from External"
// )
// console.log(heading4)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading4)
const heading5 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    class: "child"
}, [
    React.createElement("h1", {
        id: "hedingTag"
    }, "This is heading tag"),
    React.createElement("p", {
        id: "hedingTag"
    }, "This is heading tag")
]));
const rootAll = ReactDOM.createRoot(document.getElementById("root"));
rootAll.render(heading5);

//# sourceMappingURL=index.6bd02f5a.js.map
