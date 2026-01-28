import { Row, Col } from "react-bootstrap";
import Container from "../../ui/Container";
import styles from "./SiteFooter.module.scss";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={8}>
            <div>
              <p className={styles.brand}>Nextera Systems</p>
              <p className={styles.copy}>
                Building resilient digital platforms for growing businesses.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="text-md-end mt-3 mt-md-0">
            <p className={styles.note}>© 2026 Nextera Systems. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
