import Center from "@/common/components/atoms/Center";
import RoundImage from "@/common/components/atoms/RoundImage";
import { themeClasses } from "@/theme/theme";


export default function IndexProfile() {

  const env = "010-xxxx-xxxx";

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
            코드의 재사용성과 유지보수성을 중시하며, 변경에 유연한 소프트웨어를
            지향합니다.
          </p>
          <p>
            핵심 기능 구현을 위해 요구 기술을 빠르게 습득하고, 팀 프로젝트
            경연에서 우수한 수상실적을 달성해 왔습니다.
          </p>
          <p>
            주어진 기획안을 실현해 내기 위해, 안 되는 이유보다 되게 하는 방법을
            찾는 개발자입니다.
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
