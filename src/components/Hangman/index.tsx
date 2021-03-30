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
      key={0}
      r="65"
      cx="80%"
      cy="75%"
      style={defaultStroke}
    ></circle>,
    <line
      className="body"
      key={1}
      x1="85%"
      y1="265"
      x2="85%"
      y2="465"
      style={defaultStroke}
    ></line>,
    <line
      className="left-arm"
      key={2}
      x1="85%"
      y1="280"
      x2="95%"
      y2="320"
      style={defaultStroke}
    ></line>,
    <line
      className="right-arm"
      key={3}
      x1="85%"
      y1="280"
      x2="75%"
      y2="320"
      style={defaultStroke}
    ></line>,
    <line
      className="left-leg"
      key={4}
      x1="85%"
      y1="465"
      x2="95%"
      y2="505"
      style={defaultStroke}
    ></line>,
    <line
      className="right-leg"
      key={5}
      x1="85%"
      y1="465"
      x2="75%"
      y2="505"
      style={defaultStroke}
    ></line>,
  ];

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const generateBody = drawBodyParts();

    draw(() => generateBody.next());
  }, []);

  function* drawBodyParts() {
    for (let i = 0; i < BODY_PARTS.length; i++) {
      bodyParts.push(BODY_PARTS[i]);
      yield setBodyParts(bodyParts);
    }
  }

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
