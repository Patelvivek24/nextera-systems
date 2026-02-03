import React from 'react';
import Head from 'next/head';
import Container from '../../components/ui/Container';
import styles from './termsAndConditions.module.scss';
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter';
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader';

const TermsAndConditions = () => {
    return (
        <div className={styles.pageWrapper}>
            <Head>
                <title>Terms and Conditions - Nextera Systems</title>
                <meta name="description" content="Terms and Conditions for Nextera Systems" />
            </Head>
            <SiteHeader />
            <Container>
                <div className={styles.content}>
                    <h1 className={styles.title}>Terms and Conditions</h1>
                    <p className={styles.lastUpdated}>Last Updated: October 26, 2023</p>

                    <section className={styles.section}>
                        <h2>1. Introduction</h2>
                        <p>
                            These terms and conditions outline the rules and regulations for the use of Nextera Systems' Website.
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use Nextera Systems
                            if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Intellectual Property Rights</h2>
                        <p>
                            Other than the content you own, under these Terms, Nextera Systems and/or its licensors own all the intellectual property rights and materials contained in this Website.
                            You are granted limited license only for purposes of viewing the material contained on this Website.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>3. Restrictions</h2>
                        <p>
                            You are specifically restricted from all of the following:
                        </p>
                        <ul>
                            <li>Publishing any Website material in any other media;</li>
                            <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                            <li>Publicly performing and/or showing any Website material;</li>
                            <li>Using this Website in any way that is or may be damaging to this Website;</li>
                            <li>Using this Website in any way that impacts user access to this Website;</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Limitation of Liability</h2>
                        <p>
                            In no event shall Nextera Systems, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Nextera Systems, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Governing Law & Jurisdiction</h2>
                        <p>
                            These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located for the resolution of any disputes.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will do our best to ensure that any changes are communicated to you, but we advise you to check this page regularly.
                        </p>
                    </section>
                </div>
            </Container>
            <SiteFooter />
        </div>
    );
};

export default TermsAndConditions;
