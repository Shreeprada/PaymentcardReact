import React from "react";
import { FaArrowRight, FaAmazon, FaApple } from "react-icons/fa";
import styles from "./card.module.css";
const Card = ({ date, logoo, heading, subhead, device, color }) => {
  return (
    <>
      <div
        className={color === "orange" ? styles.container1 : styles.container2}
      >
        <div className={styles.row}>
          {date}
          {logoo === "amazon" ? (
            <FaAmazon style={{ fontSize: "50px" }} />
          ) : (
            <FaApple style={{ fontSize: "50px" }} />
          )}
        </div>
        <div className={styles.d}>
          <div className={styles.btn}>Case Study</div>
          <div className={styles.head}>{heading}</div>
          <div className={styles.head}>{subhead}</div>
        </div>
        <div className={styles.row}>
          {device}
          <FaArrowRight />
        </div>
      </div>
    </>
  );
};

export default Card;
