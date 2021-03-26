import styles from "../../styles/pages/Game.module.scss";
import { Alphabet } from "../../components";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();

  const word = [...router.query.word];

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
