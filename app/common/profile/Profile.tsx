import Center from "@/common/components/atoms/Center";
import RoundImage from "@/common/components/atoms/RoundImage";
import { themeClasses } from "@/theme/theme";


export default function Profile() {

  const contact = "010-0000-0000";

  return (
    <div className={`${themeClasses.bg.card} w-full p-8 shadow-md`}>
      <Center flex flexCol className="gap-3">
        <RoundImage src="/img/photos/profile.png" className="w-64" />
        <p
          id="index-page"
          className={`${themeClasses.text.primary} mb-5 text-3xl font-bold underline`}
        >
          최 효 빈
        </p>
        <div className={themeClasses.text.secondary}>
          <p>Java & JavaScript 개발자</p>
        </div>
        
        <div className={themeClasses.text.secondary}>
          | {contact} · gyqls234@naver.com |
        </div>
        <div className="flex gap-2">
          <img src="img/github.png" className="w-8 rounded-full bg-white" />
          github.com/AtomicLiquors
        </div>
      </Center>
    </div>
  );
}
