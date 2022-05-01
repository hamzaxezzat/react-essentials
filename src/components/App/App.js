import React, { useState } from "react";
import styles from "./App.module.css";
import Card from "../Card/Cards";
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

const App = () => {
    const [state, setState] = useState([
        { name: "Hamza", age: 25, number: "01010142" },
        { name: "Omar", age: 30, number: "010101123" },
        { name: "Abdo", age: 35, number: "010101345" },
    ]); // useState take two things 1.Holder

    const deleteHanddler = (e, clickedIdx) => {
        // Way 1 > as object
        // const deleteOberation = state.filter((el, idx) => idx !== clickedIdx);
        // setState(deleteOberation);
        // Way 2 > as function
        setState((prevState) => {
            return prevState.filter((el, idx) => idx !== clickedIdx);
        });
    };
    return (
        <div className={styles.mainContainer}>
            <h1>Boys</h1>
            <Card nameList={state} deleteFunc={deleteHanddler} />
        </div>
    );
};

export default App;

/* === How to pass parameters from file to another:
//* File Cards
1. create a file : Cards.js
2. set main variable function : const Card = ()
3. copy the entire function into it (Set props name if needed) : const Card = ({ nameList }) => {};
//* File App
1. import: import Card from "./Cards.js";
2. call the function like JSX  (<Card />)
3. pass the prametar (<Card nameList={names} />)
//* File Cards
4. Recive and ue the parameter $ || const Card = ({ nameList }) => {
    const cards = nameList.map(({ name, age, number }, idx) =>)};

*/
