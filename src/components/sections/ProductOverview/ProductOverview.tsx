"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import styles from "./ProductOverview.module.scss";

const benefits = [
    "Manage leads and contacts in one place",
    "Automate sales and follow-ups",
    "Improve customer engagement",
    "Track performance with real-time analytics"
];

export default function ProductOverview() {
    const textRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} aria-label="Product Overview">
            <div className={styles.container}>
                <div
                    ref={textRef}
                    className={`${styles.content} ${isVisible ? styles.visible : ""}`}
                >
                    <h2 className={styles.heading}>
                        A CRM Built to Simplify Customer Management
                    </h2>
                    <p className={styles.description}>
                        Nextera Systems CRM brings your sales, customer interactions, and data into one powerful platform,
                        helping teams work smarter, close deals faster, and deliver better customer experiences.
                    </p>

                    <ul className={styles.benefitsList}>
                        {benefits.map((benefit, index) => (
                            <li key={index} className={styles.benefitItem}>
                                <div className={styles.iconWrapper}>
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>

                    <button className={styles.ctaButton} onClick={() => console.log('CTA Clicked')}>
                        Explore Our CRM
                    </button>
                </div>

                <div className={styles.visualColumn}>
                    <div className={styles.visualPlaceholder} role="img" aria-label="Product Dashboard Preview">
                        <div className={styles.dashboardMockup}>
                            <div className={styles.mockupHeader}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={styles.mockupBody}>
                                <div className={styles.skeletonLine}></div>
                                <div className={styles.skeletonLine}></div>
                                <div className={styles.skeletonLine}></div>
                                <div className={styles.skeletonLine}></div>
                                <div className={styles.chartPlaceholder}>
                                    <div style={{ height: '40%' }}></div>
                                    <div style={{ height: '70%' }}></div>
                                    <div style={{ height: '50%' }}></div>
                                    <div style={{ height: '90%' }}></div>
                                    <div style={{ height: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
