import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Center: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`text-center ${className}`}>{children}</div>;
};

export default Center;
