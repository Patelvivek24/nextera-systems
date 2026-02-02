"use client";

import { motion } from 'framer-motion';
import {
    Unlink, Link as LinkIcon, ClipboardList, GitPullRequestArrow,
    UserX, UserCheck, EyeOff, Activity, ArrowRight
} from 'lucide-react';
import { Container } from 'react-bootstrap';
import styles from './WhatWeSolve.module.scss';

const solutionsData = [
    {
        id: 1,
        problem: {
            title: "Fragmented Information",
            description: "Disconnected customer information across spreadsheets and notes.",
            icon: Unlink
        },
        solution: {
            title: "Centralized Data",
            description: "All customer interactions and history in one unified view.",
            icon: LinkIcon
        }
    },
    {
        id: 2,
        problem: {
            title: "Manual Tracking",
            description: "Sales tracking is manual, error-prone, and time-consuming.",
            icon: ClipboardList
        },
        solution: {
            title: "Automated Pipelines",
            description: "Smart pipelines that update automatically as deals progress.",
            icon: GitPullRequestArrow
        }
    },
    {
        id: 3,
        problem: {
            title: "Leaking Funnel",
            description: "Missed follow-ups and lost leads due to lack of organization.",
            icon: UserX
        },
        solution: {
            title: "Smart Workflows",
            description: "Intelligent reminders and automated nurture sequences.",
            icon: UserCheck
        }
    },
    {
        id: 4,
        problem: {
            title: "Blind Spots",
            description: "Limited visibility into team performance and revenue.",
            icon: EyeOff
        },
        solution: {
            title: "Real-time Insights",
            description: "Live dashboards and actionable reporting for growth.",
            icon: Activity
        }
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    }
};

const WhatWeSolve = () => {
    return (
        <section className={styles.section} aria-label="What We Solve">
            <Container>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Turn Friction into Flow</h2>
                    <p>Stop wrestling with tools that slow you down. Nextera Systems eliminates bottlenecks.</p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {solutionsData.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className={styles.comparisonRow}
                        >
                            {/* Problem Card */}
                            <motion.div
                                className={`${styles.card} ${styles.problem}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={styles.content}>
                                    <div className={`${styles.iconWrapper} ${styles.problemIcon}`}>
                                        <item.problem.icon size={24} />
                                    </div>
                                    <div className={styles.textContent}>
                                        <h3>{item.problem.title}</h3>
                                        <p>{item.problem.description}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Connector */}
                            <div className={styles.connector}>
                                <div className={styles.connectorIcon}>
                                    <ArrowRight size={20} />
                                </div>
                            </div>

                            {/* Solution Card */}
                            <motion.div
                                className={`${styles.card} ${styles.solution}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={styles.content}>
                                    <div className={`${styles.iconWrapper} ${styles.solutionIcon}`}>
                                        <item.solution.icon size={24} />
                                    </div>
                                    <div className={styles.textContent}>
                                        <h3>{item.solution.title}</h3>
                                        <p>{item.solution.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default WhatWeSolve;
