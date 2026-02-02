"use client";

import { Row, Col } from "react-bootstrap";
import Container from "../../ui/Container";
import styles from "./SiteFooter.module.scss";
import { motion, Variants } from "framer-motion";

const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

export default function SiteFooter() {
  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className={styles.backgroundGradient} />

      {/* Top Divider with shiny effect */}
      <motion.div className={styles.topDivider} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1 }} />

      <Container className={styles.container}>
        <Row className={styles.mainRow}>
          {/* Column 1: Brand */}
          <Col xs={12} md={5} lg={5} className={styles.brandCol}>
            <motion.div variants={itemVariants} className={styles.brandContent}>
              <div className={styles.logo}>
                <img
                  src="/image/logo.png"
                  alt="Nextera Systems Logo"
                  className={styles.logoImage}
                />
              </div>
              <p className={styles.brandDesc}>
                Nextera Systems is an IT solutions company delivering intelligent CRM software to help businesses manage customers, automate sales, and achieve sustainable growth.
              </p>
            </motion.div>
          </Col>

          {/* Spacer Column */}
          <Col xs={12} md={1} lg={1} className="d-none d-md-block"></Col>

          {/* Column 2: Quick Links */}
          <Col xs={6} md={3} lg={3} className={styles.linksCol}>
            <motion.div variants={itemVariants}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linksList}>
                {["Product", "Solutions", "About", "Contact"].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className={styles.link}>{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Column 3: Resources/Legal */}
          <Col xs={6} md={3} lg={3} className={styles.linksCol}>
            <motion.div variants={itemVariants}>
              <h4 className={styles.colTitle}>Resources</h4>
              <ul className={styles.linksList}>
                {["Privacy Policy", "Terms of Service", "Documentation"].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className={styles.link}>{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Nextera Systems. All rights reserved.
          </div>
          <div className={styles.socialIcons}>
            {[
              {
                label: "LinkedIn",
                path: (
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />
                ),
                path2: <path d="M6 9H2V21H6V9Z" />,
                path3: <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />,
              },
              {
                label: "Twitter",
                path: (
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34675 17.5752 3.12907C16.693 2.91139 15.7745 2.97818 14.9495 3.32029C14.1245 3.6624 13.4357 4.26257 12.9814 5.03534C12.5271 5.80811 12.3308 6.71383 12.42 7.61C10.6053 7.54013 8.81846 7.10091 7.16918 6.3188C5.51991 5.53669 4.04257 4.42777 2.83 3.06C2.83 3.06 -0.0100002 9.25 6 12.82C4.6067 13.9169 2.87271 14.5204 1.1 14.52C8 18.44 16.5 16.44 16.5 7.78C16.5 7.5 16.5 7.19 16.43 6.9C17.4764 5.9529 18.3341 4.79339 18.96 3.49" />
                ),
              },
              {
                label: "GitHub",
                path: (
                  <path d="M9 19C9 19 9.38 18.23 10 17.15C6.54 18.06 4.72 15.68 4.72 15.68C3.96 13.76 2.88 13.25 2.88 13.25C1.74 12.63 2.95 12.64 2.95 12.64C4.21 12.73 4.87 13.94 4.87 13.94C5.99 15.86 7.8 15.31 8.51 14.99C8.62 14.17 8.95 13.62 9.32 13.31C6.6 13 3.75 11.96 3.75 7.29C3.75 5.96 4.22 4.88 5 4.04C4.87 3.73 4.46 2.5 5.12 0.840001C5.12 0.840001 6.14 0.520001 8.46 2.09C9.43 1.82 10.47 1.69 11.5 1.69C12.53 1.69 13.57 1.82 14.54 2.09C16.86 0.520001 17.88 0.840001 17.88 0.840001C18.54 2.5 18.13 3.73 18 4.04C18.78 4.88 19.25 5.96 19.25 7.29C19.25 11.97 16.39 12.99 13.66 13.3C14.12 13.69 14.53 14.47 14.53 15.66C14.53 17.36 14.52 18.73 14.52 19" />
                ),
              },
            ].map((icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                aria-label={icon.label}
                className={styles.socialLink}
                whileHover={{ scale: 1.2, rotate: 5, color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icon.path}
                  {icon.path2}
                  {icon.path3}
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  );
}
