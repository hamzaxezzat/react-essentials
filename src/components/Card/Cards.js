import React from "react";
import styles from "./Cards.module.css";

const Card = ({ nameList, color, type }) => {
    const cards = nameList.map(({ name, age, number }, idx) => (
        <div
            className={styles.cardWrapper}
            key={idx}
            style={{
                backgroundColor: color,
                border: type === "boys" ? "2px solid red" : "2px solid green",
            }}
        >
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Number: {number}</div>
            <div class={styles.closeBtn}>x</div>
        </div>
    ));
    return <div>{cards}</div>;
};
export default Card;
