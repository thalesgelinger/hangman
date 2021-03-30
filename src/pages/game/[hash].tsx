import styles from "../../styles/pages/Game.module.scss";
import { Alphabet, Hangman } from "../../components";
import { useEffect, useState } from "react";

export default function Game() {
  // const word = localStorage.getItem("word").toLocaleLowerCase().split("");
  const word = "batata".split("");

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [draw, setDraw] = useState(null);

  function handleSelectedLetter(letter) {
    if (!word.includes(letter)) {
      const { done } = draw();
      console.log({ done });
    }

    setSelectedLetters([...selectedLetters, letter]);
  }

  function handleDraw(drawFunction) {
    setDraw(() => drawFunction);
  }

  return (
    <div className={styles.gameContainer}>
      <main>
        <div>
          <Hangman draw={handleDraw} />
        </div>
        <div>
          {word.map((letter, key) => (
            <span key={key}>
              {selectedLetters.includes(letter) ? letter : " "}
            </span>
          ))}
        </div>
      </main>
      <footer>
        <Alphabet setSelectedLetter={handleSelectedLetter} />
      </footer>
    </div>
  );
}
