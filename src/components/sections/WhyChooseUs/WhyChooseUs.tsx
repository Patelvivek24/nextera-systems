"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import { Settings, TrendingUp, ShieldCheck, Headset, Lightbulb, ChevronDown } from "lucide-react";
import styles from "./WhyChooseUs.module.scss";

const features = [
    {
        icon: Settings,
        title: "Customizable CRM Solutions",
        description: "Workflows and dashboards that adapt perfectly to your unique business processes, ensuring your team has exactly they need."
    },
    {
        icon: TrendingUp,
        title: "Scalable Architecture",
        description: "Built on a robust foundation designed to handle your growing data and user base effortlessly, from startup to enterprise scale."
    },
    {
        icon: ShieldCheck,
        title: "Secure Cloud Infrastructure",
        description: "Enterprise-grade security protocols ensuring your data remains safe, reliable, and accessible 24/7 with 99.9% uptime guarantee."
    },
    {
        icon: Headset,
        title: "Expert Support",
        description: "Dedicated onboarding specialists and 24/7 technical support to ensure your success from day one, with rapid response times."
    },
    {
        icon: Lightbulb,
        title: "Innovation-Driven",
        description: "Future-ready technology that keeps you ahead of the curve with continuous updates and feature improvements."
    }
];

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="why-choose-us" className={styles.section} aria-label="Why Choose Us">
            <Container>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badgeContainer}>
                        <span className={styles.badge}>Why Choose Us</span>
                    </div>
                    <h2 className={styles.title}>Why Leading Businesses <span>Partner with Nextera Systems</span></h2>
                    <p className={styles.description}>
                        We don’t just provide CRM software; we deliver scalable solutions designed to grow with your business and drive tangible results.
                    </p>
                </motion.div>

                <div className={styles.layout}>
                    {/* Left Column: Image / Visual */}
                    <motion.div
                        className={styles.imageColumn}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Placeholder for actual image. Using CSS gradient from module currently.
                            To use an image, uncomment below:
                            <img src="/path/to/image.jpg" alt="Team working" />
                        */}
                    </motion.div>

                    {/* Right Column: Accordion */}
                    <div className={styles.contentColumn}>
                        <div className={styles.accordion}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <button
                                        className={styles.trigger}
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={activeIndex === index}
                                    >
                                        <div className={styles.triggerContent}>
                                            <feature.icon className={styles.icon} size={24} />
                                            <span>{feature.title}</span>
                                        </div>
                                        <ChevronDown
                                            className={`${styles.chevron} ${activeIndex === index ? styles.rotated : ''}`}
                                            size={20}
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {activeIndex === index && (
                                            <motion.div
                                                className={styles.content}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className={styles.inner}>
                                                    {feature.description}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
