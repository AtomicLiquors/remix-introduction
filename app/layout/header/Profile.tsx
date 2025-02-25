import Center from "@/components/common/general/atoms/Center";
import RoundImage from "@/components/common/general/atoms/RoundImage";
import { PHOTO_PATHS } from "@/paths/photoPaths";
import { themeClasses } from "@/theme/theme";

/*
const contact = import.meta.env.VITE_CONTACT;
console.log(contact);
*/

export default function Profile() {

  return (
    <div className={`${themeClasses.bg.card} w-full p-8`}>
      <Center flex flexCol className="gap-3">
        <RoundImage src={PHOTO_PATHS.PROFILE} className="w-64 h-64 object-cover" />
        <p
          id="index-page"
          className={`${themeClasses.text.primary} mb-5 text-3xl font-bold underline`}
        >
          최 효 빈
        </p>
        <div className={themeClasses.text.secondary}>
          <p>React.js 웹 애플리케이션 개발자</p>
        </div>

        <div className={themeClasses.text.secondary}>
          ✉️ gyqls234@naver.com
        </div>
        <div className="flex gap-2">
          <img src="/img/github.png" className="w-8 rounded-full bg-white" />
          github.com/AtomicLiquors
        </div>
      </Center>
    </div>
  );
}
