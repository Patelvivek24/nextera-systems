"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Cloud, TrendingUp, Cpu } from "lucide-react";
import { Container } from "react-bootstrap";
import { MouseEvent } from "react";
import styles from "./TrustSignals.module.scss";

const signals = [
    {
        icon: Cloud,
        title: "Cloud-Scale Security",
        description: "Enterprise-grade encryption with redundant global infrastructure for 99.99% uptime.",
        color: "#71B8B1", // Teal Cyan
    },
    {
        icon: TrendingUp,
        title: "Hyper-Growth Ready",
        description: "Elastic architecture that automatically scales resources to match your user demand instantly.",
        color: "#71B8B1", // Teal Cyan
    },
    {
        icon: Cpu,
        title: "Next-Gen Tech Core",
        description: "Powered by the latest edge computing algorithms for millisecond-latency performance.",
        color: "#71B8B1", // Teal Cyan
    },
];

function Card({ item }: { item: typeof signals[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const springConfig = { damping: 25, stiffness: 700 };
    const rotateX = useSpring(0, springConfig);
    const rotateY = useSpring(0, springConfig);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        mouseX.set(x);
        mouseY.set(y);

        // Calculate rotation based on cursor position relative to center
        const centerX = width / 2;
        const centerY = height / 2;
        const rotateXValue = ((y - centerY) / height) * -10; // Max rotation deg
        const rotateYValue = ((x - centerX) / width) * 10;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    // Create a radial gradient mask for the spotlight effect
    const cardMaskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;
    const borderMaskImage = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <motion.div
            className={styles.cardWrapper}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Spotlight Border */}
            <motion.div
                className={styles.spotlightBorder}
                style={{ maskImage: borderMaskImage, WebkitMaskImage: borderMaskImage, backgroundColor: item.color }}
            />

            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <div
                        className={styles.iconWrapper}
                        style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)` }} // Transparent bg
                    >
                        <item.icon size={32} style={{ color: "#000000" }} />
                    </div>
                    <motion.div
                        className={styles.blob}
                        style={{ backgroundColor: item.color, opacity: 0.15 }}
                    />
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>

                {/* Spotlight Gradient Overlay */}
                <motion.div
                    className={styles.spotlightOverlay}
                    style={{
                        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${item.color}15, transparent 40%)`,
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function TrustSignals() {
    return (
        <section className={styles.section} aria-label="Trust Signals" id="trust-signals">
            <div className={styles.backgroundGlow} />
            <Container>
                <div>
                    <motion.header
                        className={styles.header}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.badge}>Why Trust Us</div>
                        <h2 className={styles.title}>
                            The Foundation of <span className={styles.highlight}>Modern Business</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Reliability isn't just a feature it's our core guarantee. See why leading brands depend on Nextera.
                        </p>
                    </motion.header>

                    <div className={styles.grid}>
                        {signals.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
