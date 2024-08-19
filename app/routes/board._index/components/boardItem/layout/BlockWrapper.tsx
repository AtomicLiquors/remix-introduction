import React, { ReactNode } from 'react'

interface BoardItemLayoutProps {
    children: ReactNode;
    onClick?: () => void;
  }
  
export default function BoardItemBlockWrapper({children}: BoardItemLayoutProps) {
  return (
    <div className="flex">{children}</div>
  )
}
