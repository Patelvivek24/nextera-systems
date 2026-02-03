"use client";


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



export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className={styles.backgroundGradient} />

      {/* Top Divider */}
      <motion.div className={styles.topDivider} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1 }} />

      <Container className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.topLeft}>
            <p className={styles.description}>
              Nextera Systems is an IT solutions company delivering intelligent CRM software to help businesses manage customers, automate sales, and achieve sustainable growth.
            </p>
            {/* <img src="/image/logo.png" alt="Nextera Systems Logo" className={styles.logo} /> */}
          </div>

          <div className={styles.topRight}>
            <nav className={styles.navLinks}>
              {["Product", "Solutions", "About", "Contact"].map((item, idx) => (
                <a key={idx} href="#" className={styles.navLink}>{item}</a>
              ))}
            </nav>
            <motion.button
              onClick={scrollToTop}
              className={styles.scrollTopBtn}
              whileHover={{ scale: 1.1, backgroundColor: "#2B3F7C", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Middle Spacer */}
        <div className={styles.spacer} />

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomLeft}>
            <div className={styles.socialIcons}>
              {[
                { label: "LinkedIn", icon: <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />, icon2: <path d="M6 9H2V21H6V9Z" />, icon3: <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" /> },
                { label: "Twitter", icon: <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34675 17.5752 3.12907C16.693 2.91139 15.7745 2.97818 14.9495 3.32029C14.1245 3.6624 13.4357 4.26257 12.9814 5.03534C12.5271 5.80811 12.3308 6.71383 12.42 7.61C10.6053 7.54013 8.81846 7.10091 7.16918 6.3188C5.51991 5.53669 4.04257 4.42777 2.83 3.06C2.83 3.06 -0.0100002 9.25 6 12.82C4.6067 13.9169 2.87271 14.5204 1.1 14.52C8 18.44 16.5 16.44 16.5 7.78C16.5 7.5 16.5 7.19 16.43 6.9C17.4764 5.9529 18.3341 4.79339 18.96 3.49" /> },
                { label: "Dribbble", icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />, icon2: <path d="M19 12c-4 0-7 3-7 7" />, icon3: <path d="M5 12c4 0 7-3 7-7" /> },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, backgroundColor: "#2B3F7C", color: "#fff" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                    {social.icon2}
                    {social.icon3}
                  </svg>
                </motion.a>
              ))}
            </div>
            {/* <h1 className={styles.brandTitle}>Nextera Systems</h1> */}
            {/* <p className={styles.description}>
              Nextera Systems is an IT solutions company delivering intelligent CRM software to help businesses manage customers, automate sales, and achieve sustainable growth.
            </p> */}
            <img src="/image/logo.png" alt="Nextera Systems Logo" className={styles.logo} />
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your email" className={styles.subscribeInput} />
              <motion.button
                className={styles.subscribeBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe me
              </motion.button>
            </div>
            <div className={styles.legalLinks}>
              {["Privacy Policy", "Terms and Conditions"].map((link, idx) => (
                <a key={idx} href="#" className={styles.legalLink}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
