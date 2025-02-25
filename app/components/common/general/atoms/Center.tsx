import { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
  className?: string;
  flex?: boolean;
  flexCol?: boolean;
  textCenterDisabled?: boolean;
  onClick?: () => void;
}

const Center: React.FC<CenterProps> = ({ children, className, flex, flexCol, textCenterDisabled, onClick }) => {
  return <div onClick={onClick} className={`${className} ${flex && 'flex items-center justify-center align-center'} ${textCenterDisabled ? '' : 'text-center'} ${flexCol && 'flex-col'}`}>{children}</div>;
};

export default Center;
