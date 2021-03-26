import { useState } from "react";
import styles from "../styles/pages/Word.module.scss";

export default function Word() {
  const [word, setWord] = useState("");

  function handleWord(e) {
    setWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div className={styles.wordContainer}>
      <h1>Jogo da forca</h1>

      <form>
        <input
          type="text"
          placeholder="Digite uma palavra"
          onChange={handleWord}
        />
        <button onClick={handleSubmit}>Jogar</button>
      </form>
    </div>
  );
}
