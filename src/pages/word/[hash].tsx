import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { io } from "socket.io-client";
import styles from "../../styles/pages/Word.module.scss";

let socket;

export default function Word() {
  const [word, setWord] = useState("");

  const router = useRouter();

  const { hash } = router.query;

  useEffect(() => {
    socket = io();
  }, []);

  function handleWord(e) {
    setWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    function connectSocketAndEmitWord() {
      socket.on("connect", () => {
        socket.emit("set-word", { word, hash });
        socket.disconnect();
      });
    }

    axios.post(`/api/word/${hash}`).finally(connectSocketAndEmitWord);
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
