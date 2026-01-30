"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './CTA.module.scss';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const CTA = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Only animate once
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.ctaSection} ref={sectionRef}>
            <div className={styles.container}>
                {/* Left Side: Content */}
                <div className={`${styles.contentWrapper} ${isVisible ? styles.visible : ''}`}>
                    <h2 className={styles.heading}>
                        Ready to Transform Your Customer Management?
                    </h2>
                    <p className={styles.subtext}>
                        Empower your team with a smarter CRM and take your customer relationships to the next level with Nextera Systems.
                    </p>

                    <div className={styles.buttonGroup}>
                        <a href="#request-demo" className={`${styles.btn} ${styles.btnPrimary}`}>
                            Request a Demo
                            <span className={styles.iconWrapper}>
                                <ArrowRight size={20} />
                            </span>
                        </a>
                        <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                            Talk to Our Experts
                            <span className={styles.iconWrapper}>
                                <MessageCircle size={20} />
                            </span>
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CTA;
