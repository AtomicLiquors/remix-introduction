import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  flex?: boolean;
}

const Center: React.FC<ContainerProps> = ({ children, className, flex }) => {
  return <div className={`text-center ${className} ${flex && 'flex flex-col items-center justify-center align-center'}`}>{children}</div>;
};

export default Center;
