import Link from "next/link";
import Container from "../../ui/Container";
import styles from "./SiteHeader.module.scss";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.logo} href="/">
          Nextera Systems
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} className={styles.link} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
