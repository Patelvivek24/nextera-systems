"use client";

import Link from "next/link";
import { Row, Col, Button } from "react-bootstrap";
import Container from "../../ui/Container";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} lg={10} xl={8}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                The Next Gen Of CRM.{" "}
              </h1>
              <p className={`${styles.description} text-muted`}>
                Sassly-CRM in the past allowing you to focus more on your business or simply enjoy your newfound legal time to reflect leaving pen-and-paper.
              </p>
              <div className={`${styles.actions} d-flex flex-wrap gap-3 justify-content-center`}>
                <Button 
                  as="a"
                  href="https://cal.com/nexterasystems/demo" 
                  variant="primary" 
                  size="lg"
                  className={styles.ctaPrimary}
                >
                  Schedule a Demo
                </Button>
                <Button 
                  as="a"
                  href="mailto:sales@nexterasystems.com" 
                  variant="outline-primary" 
                  size="lg"
                  className={styles.ctaSecondary}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
