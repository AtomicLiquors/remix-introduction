import { themeClasses } from "@/theme/theme";
import { ReactNode } from "react";

interface RowCardProps {
  children: ReactNode;
  imgSrc?: string;
}

const RowCard: React.FC<RowCardProps> = ({ children, imgSrc }) => {
  return (
    <div className="p-4 flex justify-center">
      <div className={`${themeClasses.bg.card} w-full lg:w-5/6 shadow-md p-4 flex flex-col lg:flex-row-reverse justify-between leading-normal`}>
        {imgSrc && (
          <div className="text-white h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-black rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            {imgSrc}
          </div>
        )}
        <div className="mb-8">
        {children}
        </div>
      </div>
    </div>
  );
};

export default RowCard;
