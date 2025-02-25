import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`container mx-auto sm:p-4 ${className}`}>{children}</div>;
};

export default Container;
