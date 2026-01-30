'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Unlink,
    Link as LinkIcon,
    ClipboardList,
    GitPullRequestArrow,
    UserX,
    UserCheck,
    EyeOff,
    Activity,
    ArrowDown
} from 'lucide-react';
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
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
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
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Turn CRM Challenges into Growth</h2>
                    <p>Stop wrestling with tools that slow you down. Nextera Systems replaces friction with flow.</p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {solutionsData.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Problem Section */}
                            <div className={styles.problemArea}>
                                <div className={styles.iconWrapper}>
                                    <item.problem.icon size={24} />
                                </div>
                                <div className={styles.content}>
                                    <h3>{item.problem.title}</h3>
                                    <p>{item.problem.description}</p>
                                </div>
                            </div>

                            {/* Transition Element */}
                            <div className={styles.transitionArea}>
                                <div className={styles.arrow} aria-hidden="true">
                                    <ArrowDown size={16} />
                                </div>
                            </div>

                            {/* Solution Section */}
                            <div className={styles.solutionArea}>
                                <div className={styles.iconWrapper}>
                                    <item.solution.icon size={24} />
                                </div>
                                <div className={styles.content}>
                                    <h3>{item.solution.title}</h3>
                                    <p>{item.solution.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeSolve;
