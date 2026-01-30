'use client';

import React from 'react';
import {
    Users,
    BarChart3,
    Workflow,
    PieChart,
    Link,
    ShieldCheck
} from 'lucide-react';
import styles from './KeyFeatures.module.scss';

const features = [
    {
        title: "Lead & Contact Management",
        description: "Keep all customer information organized and accessible in one centralized database.",
        icon: Users
    },
    {
        title: "Sales Pipeline Automation",
        description: "Track deals, stages, and progress in real time to never miss an opportunity.",
        icon: BarChart3
    },
    {
        title: "Workflow Automation",
        description: "Reduce manual tasks with smart automation that works while you sleep.",
        icon: Workflow
    },
    {
        title: "Reports & Dashboards",
        description: "Gain actionable insights with visual analytics and customizable reporting tools.",
        icon: PieChart
    },
    {
        title: "Integrations",
        description: "Connect seamlessly with your existing tools like email, calendar, and accounting software.",
        icon: Link
    },
    {
        title: "Cloud Security",
        description: "Enterprise-grade security and reliable access ensuring your data is always safe.",
        icon: ShieldCheck
    }
];

const KeyFeatures = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Everything You Need in One CRM Platform</h2>
                    <p>Powerful features designed to help your business grow and succeed.</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <feature.icon strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
