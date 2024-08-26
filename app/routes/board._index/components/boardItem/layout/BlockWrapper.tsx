import { ReactNode } from 'react'

interface BoardItemLayoutProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
  }
  
export default function BoardItemBlockWrapper({children, className, onClick}: BoardItemLayoutProps) {
  return (
    <div className={`flex ${className}`} onClick={onClick}>{children}</div>
  )
}
