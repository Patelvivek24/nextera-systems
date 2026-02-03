"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { Zap, Shield, Users, BarChart3, Globe, Smartphone, ArrowRight, Layers, Cpu, Radio } from "lucide-react";
import styles from "./KeyFeatures.module.scss";
import { useRef, MouseEvent } from "react";
import { Container } from "react-bootstrap";

const features = [
    {
        icon: Zap,
        title: "Lightning Performance",
        description: "Optimized for speed with edge computing limits latency to milliseconds.",
        delay: 0
    },
    {
        icon: Shield,
        title: "Bank-Grade Security",
        description: "SOC2 compliant infrastructure keeps your data safe.",
        delay: 0.1
    },
    {
        icon: Users,
        title: "Real-time Collaboration",
        description: "Multiplayer editing for seamless teamwork.",
        delay: 0.2
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Deep insights with predictive AI modeling.",
        delay: 0.3
    },
    {
        icon: Globe,
        title: "Global Edge Network",
        description: "Deployed to 35+ regions worldwide for maximum availability.",
        delay: 0.4
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Responsive interfaces that work perfectly anywhere.",
        delay: 0.5
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 50,
            damping: 15
        }
    }
};

function FeatureCard({ feature }: { feature: any }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={`${styles.card} ${styles[feature.size]}`}
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -5 }}
        >
            <motion.div
                className={styles.cardGlow}
                style={{
                    background: useMotionTemplate`radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(10, 197, 178, 0.15),
                        transparent 80%
                    )`
                }}
            />

            <div className={styles.cardContent}>
                <div className={styles.headerArea}>
                    <div className={styles.iconContainer}>
                        <feature.icon strokeWidth={1.5} size={28} className={styles.icon} />
                    </div>
                </div>

                <div className={styles.textArea}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>

                <div className={styles.actionArea}>
                    <span className={styles.learnMore}>
                        Explore <ArrowRight size={16} />
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default function KeyFeatures() {
    const containerRef = useRef(null);

    return (
        <section className={styles.section} aria-label="Key Features" ref={containerRef} id="features">
            <Container>
                <div>
                    <motion.div
                        className={styles.header}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className={styles.badgeContainer}>
                            <span className={styles.badge}>Key Features</span>
                        </div>
                        <h2>
                            Everything You Need in <span className={styles.gradientText}>One CRM Platform</span>
                        </h2>
                        <p>Unleash the full potential of your business with our cutting-edge toolkit.</p>
                    </motion.div>

                    <motion.div
                        className={styles.bentoGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {features.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} />
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
