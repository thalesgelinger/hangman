import styles from "../styles/pages/Home.module.scss";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Jogo da forca</h1>
      <main>
        <aside>
          <img src="hangman.png" alt="hangman" />
        </aside>

        <aside>
          <article>
            <h2>Instruções</h2>
            <span>
              entre com este link no seu smartphone ou leia o QR code.
            </span>
          </article>

          <a href="">http://hangman.vercel.com/asdf</a>
          <img src="QR-placeholder.png" alt="QR code" />
        </aside>
      </main>
    </div>
  );
}
