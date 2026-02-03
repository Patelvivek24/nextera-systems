"use client";

import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './contact.module.scss';
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter';
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader';
import Button from '../../components/ui/Button';

const Contact = () => {
    return (
        <div className={styles.pageWrapper}>
            <Head>
                <title>Contact Us - Nextera Systems</title>
                <meta name="description" content="Get in touch with Nextera Systems for all your IT solution needs." />
            </Head>
            <SiteHeader />
            <Container>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Have a project in mind or want to learn more about our services? We'd love to hear from you.
                    </p>
                </motion.div>

                <Row className={styles.contentRow}>
                    <Col lg={4} className="mb-5 mb-lg-0">
                        <motion.div
                            className={styles.contactInfo}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>support@nexterasystems.com</p>
                                    <p>sales@nexterasystems.com</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+1 (555) 123-4567</p>
                                    <p>Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Visit Us</h3>
                                    <p>123 Innovation Drive</p>
                                    <p>Tech Valley, CA 94043</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={8}>
                        <motion.div
                            className={styles.formWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Form>
                                <Row>
                                    <Col md={6} className="mb-4">
                                        <Form.Group>
                                            <Form.Label className={styles.label}>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="John" className={styles.input} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <Form.Group>
                                            <Form.Label className={styles.label}>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Doe" className={styles.input} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.label}>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="john@example.com" className={styles.input} />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.label}>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Project Inquiry" className={styles.input} />
                                </Form.Group>

                                <Form.Group className="mb-5">
                                    <Form.Label className={styles.label}>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Tell us about your project..." className={styles.input} />
                                </Form.Group>

                                <Button
                                    label="Send Message"
                                    href="#"
                                    variant="primary"
                                    className="w-100 justify-content-center"
                                    onClick={(e) => { e.preventDefault(); }}
                                />
                            </Form>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <SiteFooter />
        </div>
    );
};

export default Contact;
