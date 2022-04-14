import React from "react";
import styles from "./App.module.css";
import Card from "../Card/Cards.js";

const App = () => {
    const boys = [
        { name: "Hamza", age: 25, number: "01010142" },
        { name: "Omar", age: 30, number: "010101123" },
        { name: "Abdo", age: 35, number: "010101345" },
    ];
    const girls = [
        { name: "Doha", age: 30, number: "01010142" },
        { name: "Fedaa", age: 25, number: "0101010122" },
        { name: "Rowayda", age: 16, number: "010101231" },
        { name: "Raghad", age: 15, number: "010101345" },
    ];

    return (
        <div className={styles.mainContainer}>
            <h1>Boys</h1>
            <Card nameList={boys} color={"darkorange"} type="boys" />
            <h1>Girls</h1>
            <Card nameList={girls} color={"pink"} type="girls" />
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
