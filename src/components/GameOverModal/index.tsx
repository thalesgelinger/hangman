import styles from "../../styles/components/GameOverModal.module.scss";

export function GameOverModal({ stats, onClick }) {
  return (
    <section className={styles.gameOverModalContainer}>
      {stats === "win" && <h1>PARABÉNS, VOCÊ GANHOU!!</h1>}
      {stats === "lose" && <h1>OH NO, VOCÊ PERDEU!!</h1>}
      <button onClick={onClick}>JOGAR NOVAMENTE!</button>
    </section>
  );
}
