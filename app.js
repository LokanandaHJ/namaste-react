const childInside = React.createElement("div", { id: "childInside" }, "Child")

const child = React.createElement("div", { id: "child" }, [childInside, childInside])

const heading = React.createElement("div", { id: "parent" }, [child, child]);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)