import { Container as BootstrapContainer } from "react-bootstrap";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export default function Container({ children, className, fluid }: ContainerProps) {
  return (
    <BootstrapContainer fluid={fluid} className={className}>
      {children}
    </BootstrapContainer>
  );
}
