import { themeClasses } from "@/theme/theme";
import { ReactNode } from "react";

interface RowCardProps {
  children: ReactNode;
  imgSrc?: string;
  imgLink?: string;
}

const RowCard: React.FC<RowCardProps> = ({ children, imgSrc, imgLink }) => {
  const img: ReactNode = (
    <img
      src={imgSrc}
    />
  );

  return (
    <div className="p-4 flex justify-center">
      <div
        className={`${themeClasses.bg.card} 
        ${imgSrc && "flex flex-col lg:flex-row-reverse justify-between"} 
        w-full lg:w-5/6 shadow-md p-4 leading-normal lg:items-center`}
      >
        {imgSrc && 
        <div 
          className="max-h-48 lg:w-48 xl:w-96 flex-none rounded-t lg:rounded-b overflow-hidden">
        {imgLink ? <a href={imgLink} target="blank">{img}</a> : img}
        </div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RowCard;
