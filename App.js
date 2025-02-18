const first=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [
            React.createElement("h1",{},"This is H1 tag"),
            React.createElement("p",{},"This is Paragraph tag"),
        ]
    )

);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(first);




