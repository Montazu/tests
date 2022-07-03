import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        Robisz kurs na wózek widłowy?
        <span>Dobrze trafiłeś!</span>
      </h1>
      <Link href='/testy/1'>
        <a className={styles.link}>Rozpocznij test</a>
      </Link>
    </main>
  );
}
