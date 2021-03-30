import styles from "../../styles/pages/Game.module.scss";
import { Alphabet, Hangman, GameOverModal } from "../../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

export default function Game({ word }) {
  const router = useRouter();

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [draw, setDraw] = useState(null);
  const [gameOverStats, setGameOverStats] = useState<"win" | "lose">(null);

  useEffect(() => {
    const isAllWordLettersSelected = () =>
      word.every((letter) => selectedLetters.includes(letter));

    if (isAllWordLettersSelected()) {
      setGameOverStats("win");
    }
  }, [selectedLetters]);

  function handleSelectedLetter(letter) {
    if (!word.includes(letter)) {
      const { done } = draw();
      if (done) {
        setGameOverStats("lose");
      }
    }

    setSelectedLetters([...selectedLetters, letter]);
  }

  function handleDraw(drawFunction) {
    setDraw(() => drawFunction);
  }

  return (
    <div className={styles.gameContainer}>
      {gameOverStats && (
        <GameOverModal stats={gameOverStats} onClick={router.back} />
      )}
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const word = req.cookies.word.split("");

  return {
    props: { word },
  };
};
