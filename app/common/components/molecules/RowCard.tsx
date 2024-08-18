import { themeClasses } from "@/theme/theme";
import { ReactNode } from "react";

interface RowCardProps {
  children: ReactNode;
  imgSrc?: string;
}

const RowCard: React.FC<RowCardProps> = ({ children, imgSrc }) => {
  return (
    <div className="p-4 flex justify-center">
      <div
        className={`${themeClasses.bg.card} 
        ${imgSrc && "flex flex-col lg:flex-row-reverse justify-between"} 
        w-full lg:w-5/6 shadow-md p-4 leading-normal`}
      >
        {imgSrc && (
          <img src={imgSrc} className="object-cover h-48 lg:h-auto lg:w-48 xl:w-96 flex-none bg-cover rounded-t lg:rounded-l text-center overflow-hidden"/>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RowCard;
