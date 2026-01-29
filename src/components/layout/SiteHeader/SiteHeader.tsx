"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav } from "react-bootstrap";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "@/components/ui/Button";
import styles from "./SiteHeader.module.scss";

const NAV_LINKS = [
  { label: "Home", href: "/", hasDropdown: true },
  { label: "Pages", href: "/pages", hasDropdown: true },
  { label: "Shop", href: "/shop", hasDropdown: true },
  { label: "Blog", href: "/blog", hasDropdown: true },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className={styles.inner}>
        <Navbar expand="lg" variant="light" className="w-100">
          <motion.div
            className={styles.logoContainer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Navbar.Brand as={Link} href="/" className={styles.logo}>
              <Image 
                src="/image/logo.png" 
                alt="Nextera Systems Logo" 
                width={150} 
                height={40}
                priority
                className={`${styles.logoImage} img-fluid`}
              />
            </Navbar.Brand>
          </motion.div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.nav}`}>
              {NAV_LINKS.map((link, index) => (
                <NavLink key={link.label} link={link} index={index} />
              ))}
            </Nav>
            <div className={styles.rightSection}>
              <motion.div
                className={styles.ctaContainer}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button 
                  label="Get Started" 
                  href="/get-started" 
                  variant="primary"
                  className={styles.ctaButton}
                />
              </motion.div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </motion.header>
  );
}

function NavLink({ link, index }: { link: { label: string; href: string; hasDropdown: boolean }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.navItem}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Nav.Link as={Link} href={link.href} className={styles.link}>
        {link.label}
      </Nav.Link>
    </motion.div>
  );
}
