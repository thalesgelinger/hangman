import { useState } from "react";
import styles from "../../styles/components/Alphabet.module.scss";

export function Alphabet({ setSelectedLetter }) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const [disabledLetters, setDisabledLetters] = useState([]);

  function handleSelectedLetter(letter) {
    return () => {
      setDisabledLetters([...disabledLetters, letter]);
      setSelectedLetter(letter);
    };
  }

  return (
    <div className={styles.alphabetContainer}>
      {alphabet.map((letter) => (
        <>
          <input
            type="checkbox"
            id={`letter${letter}`}
            disabled={disabledLetters.includes(letter)}
            onClick={handleSelectedLetter(letter)}
          />
          <label htmlFor={`letter${letter}`}>{letter}</label>
        </>
      ))}
    </div>
  );
}
