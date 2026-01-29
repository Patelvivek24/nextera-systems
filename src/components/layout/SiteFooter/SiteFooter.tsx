"use client";

import { Row, Col } from "react-bootstrap";
import Container from "../../ui/Container";
import styles from "./SiteFooter.module.scss";
import { useState } from "react";

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <Row>
            {/* Subscribe Newsletter Column */}
            <Col xs={12} md={6} lg={6} className={styles.newsletterCol}>
              <div className={styles.newsletterContent}>
                <h3 className={styles.newsletterTitle}>
                  Subscribe <span className={styles.italic}>Newsletter</span>
                </h3>
                <p className={styles.newsletterDesc}>
                  Nextera Systems is an IT solutions company delivering intelligent CRM software to help businesses manage customers, automate sales, and achieve sustainable growth.
                </p>
                <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                  <div className={styles.inputWrapper}>
                    <svg
                      className={styles.envelopeIcon}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 5.83333L9.0755 10.05C9.63533 10.3667 10.3647 10.3667 10.9245 10.05L17.5 5.83333M3.33333 15.8333H16.6667C17.5871 15.8333 18.3333 15.0871 18.3333 14.1667V5.83333C18.3333 4.91286 17.5871 4.16667 16.6667 4.16667H3.33333C2.41286 4.16667 1.66667 4.91286 1.66667 5.83333V14.1667C1.66667 15.0871 2.41286 15.8333 3.33333 15.8333Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.emailInput}
                    />
                    <button type="submit" className={styles.signUpButton}>
                      Sign Up <span className={styles.arrow}>&gt;</span>
                    </button>
                  </div>

                </form>
              </div>
            </Col>

            {/* Quick Links Column */}
            <Col xs={12} md={6} lg={3} className={styles.servicesCol}>
              <h3 className={styles.sectionTitle}>Quick Links</h3>
              <ul className={styles.servicesList}>
                <li><a href="#" className={styles.serviceLink}>Product</a></li>
                <li><a href="#" className={styles.serviceLink}>Solutions</a></li>
                <li><a href="#" className={styles.serviceLink}>About</a></li>
                <li><a href="#" className={styles.serviceLink}>Contact</a></li>
              </ul>
            </Col>


            {/* Legal Column */}
            <Col xs={12} md={6} lg={3} className={styles.contactCol}>
              <h3 className={styles.sectionTitle}>Legal</h3>
              <ul className={styles.servicesList}>
                <li><a href="#" className={styles.serviceLink}>Privacy Policy</a></li>
                <li><a href="#" className={styles.serviceLink}>Terms & Conditions</a></li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.separator}>
            <button onClick={scrollToTop} className={styles.scrollToTop} aria-label="Scroll to top">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10L8 6L12 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Row className={styles.bottomRow}>
            <Col xs={12} md={6} className={styles.copyrightCol}>
              <div className={styles.copyrightWrapper}>
                <div className={styles.logo}>
                  <span className={styles.logoText}>N</span>
                </div>
                <p className={styles.copyright}>
                  © 2025 <strong>Nextera Systems</strong>. All rights reserved.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} className={styles.navCol}>
              <nav className={styles.footerNav}>
                <a href="#" className={styles.navLink}>Privacy Policy</a>
                <a href="#" className={styles.navLink}>Terms & Conditions</a>
              </nav>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
