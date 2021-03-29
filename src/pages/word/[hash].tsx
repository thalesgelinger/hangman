import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/pages/Word.module.scss";

export default function Word() {
  const [word, setWord] = useState("");

  const router = useRouter();

  const { hash } = router.query;

  function handleWord(e) {
    setWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`/api/word/${hash}`, { word });
    window.close();
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
