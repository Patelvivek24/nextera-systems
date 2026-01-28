import { Hero, SiteFooter, SiteHeader } from "../components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <Hero />
      </main>
      <SiteFooter />
    </div>
  );
}
