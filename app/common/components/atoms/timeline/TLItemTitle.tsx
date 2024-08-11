import { themeClasses } from '@/theme/theme';
import { ReactNode } from "react";

interface TLItemTitleProps {
  children: ReactNode;
}

const TLItemTitle: React.FC<TLItemTitleProps> = ({ children }) => {
  return (
    <h3
      className={`${themeClasses.text.primary} flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white`}
    >
      {children}
    </h3>
  );
};

export default TLItemTitle;