"use client";

import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "./CTA.module.scss";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

export default function CTA() {
    return (
        <section className={styles.ctaSection} aria-label="Call to Action">
            {/* Main Content */}
            <Container>
                <motion.div
                    className={styles.glassCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className={styles.contentWrapper}>
                        <motion.h2
                            className={styles.heading}
                            variants={itemVariants}
                        >
                            Ready to Transform Your Customer Management?
                        </motion.h2>

                        <motion.p
                            className={styles.subtext}
                            variants={itemVariants}
                        >
                            Empower your team with a smarter CRM and take your customer relationships
                            to the next level with Nextera Systems.
                        </motion.p>

                        <motion.div
                            className={styles.buttonGroup}
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#request-demo"
                                className={styles.btnPrimary}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Request a Demo
                                <ArrowRight size={20} />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className={`${styles.btn} ${styles.btnSecondary}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Talk to Our Experts
                                <MessageCircle size={20} />
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
