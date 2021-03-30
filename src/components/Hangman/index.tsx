import { useEffect, useState } from "react";
import styles from "../../styles/components/Hangman.module.scss";

export function Hangman({ draw }) {
  const defaultStroke = {
    stroke: "white",
    strokeWidth: "3px",
  };

  const BODY_PARTS = [
    <circle
      className="head"
      r="65"
      cx="80%"
      cy="75%"
      style={defaultStroke}
    ></circle>,
    <line
      className="body"
      x1="85%"
      y1="265"
      x2="85%"
      y2="465"
      style={defaultStroke}
    ></line>,
    <line
      className="left-arm"
      x1="85%"
      y1="280"
      x2="95%"
      y2="320"
      style={defaultStroke}
    ></line>,
    <line
      className="right-arm"
      x1="85%"
      y1="280"
      x2="75%"
      y2="320"
      style={defaultStroke}
    ></line>,
    <line
      className="left-leg"
      x1="85%"
      y1="465"
      x2="95%"
      y2="505"
      style={defaultStroke}
    ></line>,
    <line
      className="right-leg"
      x1="85%"
      y1="465"
      x2="75%"
      y2="505"
      style={defaultStroke}
    ></line>,
  ];

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    function* drawBodyParts() {
      for (let i = 0; i < BODY_PARTS.length; i++) {
        console.log(bodyParts);

        setBodyParts([...bodyParts, BODY_PARTS[i]]);
        yield null;
      }
    }

    const generateBody = drawBodyParts();

    draw(() => generateBody.next());
  }, []);

  return (
    <svg viewBox="0 0 500 700" className={styles.hangmanContainer}>
      <rect y="681" width="60%" height="20px" fill="white" />
      <rect x="135" width="20" height="100%" fill="white" />
      <rect x="135" width="60%" height="20" fill="white" />
      <rect x="83%" width="20" height="10%" fill="white" />

      {bodyParts.map((part) => part)}
    </svg>
  );
}
