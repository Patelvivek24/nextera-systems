import Button from "../../ui/Button";
import Container from "../../ui/Container";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Modern infrastructure for teams</p>
          <h1 className={styles.title}>Move faster with resilient systems.</h1>
          <p className={styles.summary}>
            Nextera Systems delivers cloud-ready platforms, observability, and automation
            tailored to your organization.
          </p>
          <div className={styles.actions}>
            <Button label="Start a project" href="/contact" />
            <Button label="Explore services" href="/services" variant="ghost" />
          </div>
        </div>
        <div className={styles.card}>
          <h2>What we deliver</h2>
          <ul>
            <li>Platform engineering and architecture reviews</li>
            <li>DevOps enablement with actionable runbooks</li>
            <li>Secure deployments and lifecycle monitoring</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
