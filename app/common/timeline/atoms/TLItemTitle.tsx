import LineBreak, { breakpoint } from '@/common/components/atoms/LineBreak';
import FontAwesome, { FAType, TCType } from '@/common/icon/FontAwesome';
import { themeClasses } from '@/theme/theme';

interface TLItemTitleProps {
  title: string;
  icon: FAType;
  color: TCType;
}

{/* items-start와 self-start 조합으로 아이콘을 텍스트 첫 줄에 고정. 텍스트 가운데에 있는 것처럼 보이도록 mt-1 사용*/}
const TLItemTitle: React.FC<TLItemTitleProps> = ({ title, icon, color }) => {
  return (
    <h3
      className={`${themeClasses.text.primary} flex items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white`}
    >
      <div className="lg:absolute mt-1 self-start flex items-center justify-center min-w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <FontAwesome
          icon={icon}
          color={color}
        />
      </div>
      &nbsp;<div>{title.split(breakpoint).map((e) => <LineBreak>{e}</LineBreak>)}</div>
    </h3>
  );
};

export default TLItemTitle;