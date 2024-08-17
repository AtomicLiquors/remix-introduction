import { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
  className?: string;
  flex?: boolean;
  flexCol?: boolean;
  textCenterDisabled?: boolean;
}

const Center: React.FC<CenterProps> = ({ children, className, flex, flexCol, textCenterDisabled }) => {
  return <div className={`${className} ${flex && 'flex items-center justify-center align-center'} ${textCenterDisabled ? '' : 'text-center'} ${flexCol && 'flex-col'}`}>{children}</div>;
};

export default Center;
