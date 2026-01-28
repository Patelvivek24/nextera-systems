import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
}

export default function Button({ label, href, variant = "primary" }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link className={className} href={href}>
        {label}
      </Link>
    );
  }

  return (
    <button className={className} type="button">
      {label}
    </button>
  );
}
