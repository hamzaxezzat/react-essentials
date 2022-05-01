import React from "react";
import styles from "./Cards.module.css";

const Card = ({ nameList, deleteFunc }) => {
    const cards = nameList.map(({ name, age, number }, idx) => (
        <div
            className={styles.cardWrapper}
            key={idx}
            style={{ backgroundColor: "green" }}
        >
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Number: {number}</div>
            <div
                className={styles.closeBtn}
                onClick={(e) => deleteFunc(e.target, idx)}
            >
                x
            </div>
        </div>
    ));
    return <div>{cards}</div>;
};
export default Card;
