import LineBreak, { breakpoint } from "@/common/components/atoms/LineBreak";
import { SkillProps } from "./indexSkillType";
import { themeClasses } from "@/theme/theme";
import BulletListContainer from "@/common/components/molecules/BulletListContainer";
import BulletListItem from "@/common/components/atoms/BulletListItem";
import GridWithFarLeftItem from "@/common/components/atoms/GridWithFarLeftItem";
import { useScrollReachedToImage } from "@/hooks/useScrollReachedImage";
import { useEffect, useRef } from "react";

const path = "/img/skills";

const IndexSkill: React.FC<SkillProps> = ({ title, content, img }) => {

  const imageRef = useRef<HTMLImageElement>(null);
  const isImageVisible = useScrollReachedToImage(imageRef);

  return (
    <div
      className={`${themeClasses.bg.card} flex gap-5 w-5/6 p-4 shadow-md rounded-lg text-left`}
    >
      <GridWithFarLeftItem
        left={<img src={`${path}/${img}.png`} alt={`${title}Img`} ref={imageRef} className={`${isImageVisible ? 'opacity-100' : 'opcatiy-0'} w-8 h-8 sm:w-16 sm:h-16`}/>}
        up={
          <h3
            className={`${themeClasses.text.primary} ml-2 text-lg text-primary font-semibold mb-2`}
          >
            {title}
          </h3>
        }
        down={
          <BulletListContainer className={`ml-3 break-keep text-sm sm:text-base ${themeClasses.text.secondary}`}>
            {content.map((line, lineIdx) => (
              <BulletListItem
                key={lineIdx}
                spacing={1}
                bullet={<>•</>}
                item={line.split(breakpoint).map((token, tokenIdx) => (
                  <LineBreak key={tokenIdx}>{token}</LineBreak>
                ))}
              />
            ))}
          </BulletListContainer>
        }
      />
    </div>
  );
};

export default IndexSkill;
