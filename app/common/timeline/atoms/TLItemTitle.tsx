import FontAwesome, { FAType, TCType } from '@/common/icon/FontAwesome';
import { themeClasses } from '@/theme/theme';

interface TLItemTitleProps {
  title: string;
  icon: FAType;
  color: TCType;
}

const TLItemTitle: React.FC<TLItemTitleProps> = ({ title, icon, color }) => {
  return (
    <h3
      className={`${themeClasses.text.primary} flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white`}
    >
      <span className="lg:absolute flex items-center justify-center min-w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <FontAwesome
          icon={icon}
          color={color}
        />
      </span> 
      &nbsp;
      {title}
    </h3>
  );
};

export default TLItemTitle;