import Center from "@/common/components/atoms/Center";
import RoundImage from "@/common/components/atoms/RoundImage";
import { themeClasses } from "@/theme/theme";

export default function IndexProfile() {
  return (
    <div className={`${themeClasses.bg.card} w-full p-8 shadow-md`}>
      <Center flex>
        <RoundImage src="/img/photos/profile.png" className="w-64" />
        <p
          id="index-page"
          className={`${themeClasses.text.primary} text-3xl font-bold underline`}
        >
          최 효 빈
        </p>
        <div className={themeClasses.text.secondary}>
          <p>Java & JavaScript 개발자</p>
        </div>
        <div className={themeClasses.text.secondary}>
          | 010-xxxx-xxxx · gyqls234@naver.com |
        </div>
        <div className="flex">
          <img src="img/github.png" className="w-8 rounded-full bg-white" />
          github.com/AtomicLiquors
        </div>
      </Center>
    </div>
  );
}
