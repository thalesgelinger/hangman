import styles from "../../styles/pages/Game.module.scss";
import { Alphabet } from "../../components";
import { useState } from "react";

export default function Game() {
  const word = localStorage.getItem("word").split("");

  const [selectedLetters, setSelectedLetters] = useState([]);

  function handleSelectedLetter(letter) {
    setSelectedLetters([...selectedLetters, letter]);
  }

  return (
    <div className={styles.gameContainer}>
      <main>
        <div>
          <img src="../hangman.png" alt="hangman" />
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
