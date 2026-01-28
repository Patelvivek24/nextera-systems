import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  const containerClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return <div className={containerClassName}>{children}</div>;
}
