import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import QRCode from "qrcode";
import styles from "../styles/pages/Home.module.scss";

export default function Home({ hash, qrCodeUrl }) {
  const router = useRouter();

  useEffect(() => {
    async function choosenWord() {
      try {
        const {
          data: { word },
        } = await axios.get(`/api/word/${hash}`);
        localStorage.setItem("word", word);
        router.push({ pathname: `/game/${hash}` });
      } catch (e) {
        setTimeout(choosenWord, 2000);
      }
    }

    choosenWord();
  });

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

          <a
            href={`http://localhost:3000/word/${hash}`}
          >{`http://localhost:3000/word/${hash}`}</a>
          <img src={qrCodeUrl} alt="QR code" />
        </aside>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const hash = Math.random().toString(36).substring(7);
  const qrCodeUrl = await QRCode.toDataURL(
    `http://localhost:3000/word/${hash}`
  );
  return {
    props: { hash, qrCodeUrl },
  };
}
