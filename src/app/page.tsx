import { Hero, SiteFooter, SiteHeader, WhatWeSolve } from "../components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={`${styles.main} w-100`}>
        <Hero />
        <WhatWeSolve />
      </main>
      <SiteFooter />
    </div>
  );
}
