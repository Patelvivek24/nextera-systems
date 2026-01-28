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
                The Next Gen Of{" "}
                <span className={styles.titleAccent}>
                  CRM.
                  <svg className={styles.wavyUnderline} width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M2 7C8 3 14 9 20 5C26 1 32 7 38 5C44 3 50 7 56 5C62 3 68 7 74 5C80 3 86 7 92 5C98 3 104 7 110 5C113 4 116 5 118 6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </span>
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
