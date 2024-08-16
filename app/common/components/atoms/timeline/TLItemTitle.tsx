import FontAwesome, { FAType } from '@/common/icon/FontAwesome';
import { themeClasses } from '@/theme/theme';
import { ReactNode } from "react";

interface TLItemTitleProps {
  title: string;
  icon: FAType;
}

const TLItemTitle: React.FC<TLItemTitleProps> = ({ title, icon }) => {
  return (
    <h3
      className={`${themeClasses.text.primary} flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white`}
    >
      <span className="lg:absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <FontAwesome
          icon={icon}
        />
      </span> 
      &nbsp;
      {title}
    </h3>
  );
};

export default TLItemTitle;