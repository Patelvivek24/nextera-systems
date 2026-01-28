"use client";

import Link from "next/link";
import { Button as BootstrapButton } from "react-bootstrap";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "outline-primary" | "outline-secondary" | "ghost";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  size?: "sm" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ 
  label, 
  href, 
  variant = "primary", 
  size,
  className,
  type = "button",
  onClick
}: ButtonProps) {
  const buttonClassName = className 
    ? `${styles.button} ${styles[variant]} ${className}` 
    : `${styles.button} ${styles[variant]}`;

  const bootstrapVariant = variant === "ghost" ? "outline-primary" : variant;

  if (href) {
    return (
      <BootstrapButton
        as={Link}
        href={href}
        variant={bootstrapVariant}
        size={size}
        className={buttonClassName}
      >
        {label}
      </BootstrapButton>
    );
  }

  return (
    <BootstrapButton
      variant={bootstrapVariant}
      size={size}
      className={buttonClassName}
      type={type}
      onClick={onClick}
    >
      {label}
    </BootstrapButton>
  );
}
