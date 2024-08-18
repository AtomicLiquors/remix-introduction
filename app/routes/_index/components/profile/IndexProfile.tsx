import Center from "@/common/components/atoms/Center";
import RoundImage from "@/common/components/atoms/RoundImage";
import { themeClasses } from "@/theme/theme";


export default function IndexProfile() {

  const env = process.env.PHONE_NUMBER;

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
          <p>
            안녕하세요! 프론트엔드 웹 개발자 최효빈입니다.
          </p>
          <p>
            프론트엔드 분야의 다양한 기술과 빠른 피드백을 즐깁니다.
          </p>
          <p>
            사소한 아이디어도 진지하게 경청하고, 안 되는 이유보다 되는 이유를 찾으며 
          </p>
          <p>
            색다른 소프트웨어를 만들어내는 팀원입니다.
          </p>
        </div>
        <div className={themeClasses.text.secondary}>
          | {env} · gyqls234@naver.com |
        </div>
        <div className="flex gap-2">
          <img src="img/github.png" className="w-8 rounded-full bg-white" />
          github.com/AtomicLiquors
        </div>
      </Center>
    </div>
  );
}
