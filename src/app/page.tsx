import { Hero, SiteFooter, SiteHeader, WhatWeSolve, KeyFeatures, WhyChooseUs, CTA, TrustSignals, ProductOverview } from "../components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={`${styles.main} w-100`}>
        <Hero />
        <TrustSignals />
        <WhatWeSolve />
        <ProductOverview />
        <KeyFeatures />
        <WhyChooseUs />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
