"use client";

import Link from "next/link";
import styles from "./Hero.module.scss";
import LiquidGradient from "./LiquidGradient";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Layer */}
      <div className={styles.backgroundCanvas}>
        <LiquidGradient />
      </div>

      {/* Overlay Layer for readability */}
      <div className={styles.overlay} />

      {/* Content Layer */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Smart CRM Solutions for the Next Era of Business
          </h1>
          <p className={styles.subtitle}>
            Nextera Systems helps businesses automate sales, centralize customer data, and build stronger relationships with an intelligent, scalable CRM platform.
          </p>
          <div className={styles.actions}>
            <Link href="https://cal.com/nexterasystems/demo" className={styles.btnPrimary}>
              Request a Demo
            </Link>
            {/* <Link href="mailto:sales@nexterasystems.com" className={styles.btnSecondary}>
              Talk to an Expert
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
