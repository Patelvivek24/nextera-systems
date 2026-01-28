import Container from "../../ui/Container";
import styles from "./SiteFooter.module.scss";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.brand}>Nextera Systems</p>
          <p className={styles.copy}>
            Building resilient digital platforms for growing businesses.
          </p>
        </div>
        <p className={styles.note}>© 2026 Nextera Systems. All rights reserved.</p>
      </Container>
    </footer>
  );
}
