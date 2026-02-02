"use client";

import { createElement, useRef, useEffect, useState } from "react";
import {
    Settings,
    TrendingUp,
    ShieldCheck,
    Headset,
    Lightbulb
} from "lucide-react";
import styles from "./WhyChooseUs.module.scss";

// Data content
const features = [
    {
        icon: Settings,
        title: "Customizable CRM Solutions",
        description: "Tailor-made workflows and dashboards that adapt perfectly to your unique business processes."
    },
    {
        icon: TrendingUp,
        title: "Scalable Architecture",
        description: "Built on a robust foundation designed to handle your growing data and user base effortlessly."
    },
    {
        icon: ShieldCheck,
        title: "Secure Cloud Infrastructure",
        description: "Enterprise-grade security protocols ensuring your data remains safe, reliable, and accessible 24/7."
    },
    {
        icon: Headset,
        title: "Expert Support",
        description: "Dedicated onboarding specialists and 24/7 technical support to ensure your success from day one."
    },
    {
        icon: Lightbulb,
        title: "Innovation-Driven",
        description: "Future-ready technology that keeps you ahead of the curve with continuous updates and improvements."
    }
];

export default function WhyChooseUs() {
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
            id="why-choose-us"
            className={styles.section}
            ref={sectionRef}
        >
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Businesses Choose Nextera Systems</h2>
                    <p className={styles.description}>
                        We don’t just provide CRM software; we deliver scalable solutions designed to grow with your business.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${isVisible ? styles.visible : ""}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.iconWrapper}>
                                {createElement(feature.icon, {
                                    size: 32,
                                    className: styles.icon
                                })}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
