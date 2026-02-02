"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { Cloud, TrendingUp, Cpu } from "lucide-react";
import styles from "./TrustSignals.module.scss";

const signals = [
    {
        icon: Cloud,
        title: "Cloud-based & secure",
        description: "Enterprise-grade encryption and secure data handling patterns that protect your business assets 24/7."
    },
    {
        icon: TrendingUp,
        title: "Scalable for growing teams",
        description: "Infrastructure that adapts effortlessly to your user growth, ensuring consistent performance at any scale."
    },
    {
        icon: Cpu,
        title: "Built with modern technology",
        description: "Leveraging the latest tech stack to deliver lightning-fast experiences and future-proof reliability."
    }
];

export default function TrustSignals() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={styles.section}
            aria-label="Trust Signals"
        >
            <div className="container">
                <header className={styles.header}>
                    <h2 className={styles.title}>
                        Trusted by growing businesses, Nextera Systems delivers secure and reliable CRM solutions built for performance, scalability, and long-term success.
                    </h2>
                </header>

                <div className={styles.grid}>
                    {signals.map((item, index) => (
                        <article
                            key={index}
                            className={`${styles.card} ${isVisible ? styles.visible : ""}`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={styles.iconWrapper}>
                                {createElement(item.icon, {
                                    size: 32,
                                    className: styles.icon,
                                    strokeWidth: 1.5
                                })}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
