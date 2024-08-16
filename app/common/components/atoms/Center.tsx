import { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
  className?: string;
  flex?: boolean;
  flexCol?: boolean;
}

const Center: React.FC<CenterProps> = ({ children, className, flex, flexCol }) => {
  return <div className={`text-center ${className} ${flex && 'flex items-center justify-center align-center'} ${flexCol && 'flex-col'}`}>{children}</div>;
};

export default Center;
