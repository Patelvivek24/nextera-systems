"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, User, ArrowRight, Zap } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProductOverview.module.scss";

const benefits = [
    "Unified Lead Management",
    "Automated Sales Pipelines",
    "Real-time Analytics Dashboard",
    "Seamless Team Collaboration"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
};

const barVariants = {
    hidden: { height: "0%" },
    visible: (i: number) => ({
        height: `${[45, 75, 55, 92, 65, 85][i]}%`,
        transition: {
            duration: 1.2,
            delay: 0.6 + (i * 0.1),
            type: "spring" as const,
            bounce: 0.2
        }
    })
};

const floatVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "backOut" as const
        }
    },
    animate: {
        y: [0, -12, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

export default function ProductOverview() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

    return (
        <section className={styles.section} aria-label="Product Overview" ref={sectionRef}>
            <Container>
                <Row>
                    <Col>
                        <motion.div
                            className={styles.content}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.h2 className={styles.heading} variants={itemVariants}>
                                A CRM Built to Simplify <br />
                                <span className={styles.spantitle}>Helper Management</span>
                            </motion.h2>
                            <motion.p className={styles.description} variants={itemVariants}>
                                Nextera Systems brings your sales, customer interactions, and data into one powerful platform.
                                Stop juggling multiple tools and start streamlining your workflow today.
                            </motion.p>

                            <ul className={styles.benefitsList}>
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        className={styles.benefitItem}
                                        variants={itemVariants}
                                    >
                                        <div className={styles.iconWrapper}>
                                            <Check size={18} strokeWidth={3} />
                                        </div>
                                        {benefit}
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.button
                                className={styles.ctaButton}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                variants={itemVariants}
                                onClick={() => console.log('Explore CRM')}
                            >
                                Explore Platform <ArrowRight size={18} strokeWidth={2.5} />
                            </motion.button>
                        </motion.div>
                    </Col>

                    <Col className={styles.visualColumn}>
                        <motion.div
                            style={{ y, rotateX: rotate }}
                            className={styles.dashboardContainer}
                            initial={{ opacity: 0, rotateX: 10, scale: 0.95 }}
                            whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className={styles.glassOverlay} />
                            <div className={styles.sidebar} />

                            <div className={styles.mainContent}>
                                <div className={styles.headerBar} />

                                <div className={styles.statsGrid}>
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={styles.statCard} />
                                    ))}
                                </div>

                                <div className={styles.chartArea}>
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            className={styles.chartBar}
                                            custom={i}
                                            variants={barVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                className={styles.activeUserCard}
                                variants={floatVariants}
                                initial="hidden"
                                whileInView={["visible", "animate"]}
                                viewport={{ once: true }}
                            >
                                <div className={styles.userAvatar}>
                                    <Zap size={22} fill="currentColor" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--color-foreground)' }}>New Lead Acquired</div>
                                    <div style={{ fontSize: '13px', opacity: 0.6, color: 'var(--color-text-muted)' }}>Just now via Web Form</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
