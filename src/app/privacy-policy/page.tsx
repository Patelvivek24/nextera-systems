import React from 'react';
import Head from 'next/head';
import Container from '../../components/ui/Container';
import styles from './privacyPolicy.module.scss';
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter';
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader';

const PrivacyPolicy = () => {
    return (
        <div className={styles.pageWrapper}>
            <Head>
                <title>Terms and Conditions - Nextera Systems</title>
                <meta name="description" content="Terms and Conditions for Nextera Systems" />
            </Head>
            <SiteHeader />
            <Container>
                <div className={styles.content}>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last Updated: October 26, 2023</p>

                    <section className={styles.section}>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to Nextera Systems. We value your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Important Information and Who We Are</h2>
                        <p>
                            Nextera Systems is the controller and responsible for your personal data. If you have any questions about this privacy policy, include any requests to exercise your legal rights, please contact us using the details set out below.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>3. The Data We Collect About You</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul>
                            <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. How We Use Your Personal Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have specific questions about these Terms, feel free to contact us at support@nexterasystems.com.
                        </p>
                    </section>
                </div>
            </Container>
            <SiteFooter />
        </div>
    );
};

export default PrivacyPolicy;
