import { useScrollReachedToImage } from "@/hooks/useScrollReachedImage";
import { themeClasses } from "@/theme/theme";
import { ReactNode, useEffect, useRef, useState } from "react";

interface RowCardProps {
  children: ReactNode;
  imgSrc?: string;
  imgLink?: string;
}

const RowCard: React.FC<RowCardProps> = ({ children, imgSrc, imgLink }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const isImageVisible = useScrollReachedToImage(imageRef);

  const img: ReactNode = (
  
      <img
        ref={imageRef}
        src={imgSrc}
        style={{ visibility: isImageVisible ? "visible" : "hidden" }}
        className="w-full h-auto object-cover lg:w-full lg:h-full"
      />
  );

  return (
    <div className="p-2 sm:p-4 flex justify-center">
      <div
        className={`${themeClasses.bg.card} 
        ${imgSrc && "flex flex-col lg:flex-row-reverse justify-between"} 
        w-full lg:w-5/6 shadow-md p-4 leading-normal lg:items-center`}
      >
        {imgSrc && (
          <div className="max-h-48 w-full lg:w-48 lg:h-48 xl:h-auto xl:w-96 flex-none rounded-t lg:rounded-b overflow-hidden">
            {imgLink ? (
              <a href={imgLink} target="blank" className="lg:h-full">
                {img}
              </a>
            ) : (
              img
            )}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RowCard;
