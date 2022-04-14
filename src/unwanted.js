import React, { Fragment } from "react";

const App = () => {
    const h1Style = { color: "red", marginTop: "100px" };
    const names = ["Ahmed", "Esraa", "Sara"];
    const myName = "Hamza";

    return (
        <Fragment>
            <h1 style={h1Style}>
                {myName === "Hamza" ? "Hello Hamza" : "Hello There"}
            </h1>
            <div>
                Names:
                {names.map((el) => {
                    <p> {el}</p>;
                })}
            </div>
        </Fragment>
    );
};

export default App;
// OR : rafce
/*
<h1 style={h1Style}>!Hello World</h1> //OR
{<h1 style={{ color: "red", marginTop: "100px" };}>!Hello World</h1>}

--
Don't use foreach(Because JSX make automatic foreach so you need to prevent it by map)
*/
// ReactDOM.render(
//     App(), //This code is JSX(JS XML) not HTML
//     document.getElementById("root")
// );

//* JSX: seems like you write HTML but it translated automatic to JS by("BABEL JS")
//* BABEL JS: take readable code from you translate it to readable code for browser
