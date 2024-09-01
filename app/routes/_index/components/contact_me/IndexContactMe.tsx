import Center from "@/common/components/atoms/Center";
import { themeClasses } from "@/theme/theme";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// To-Do : Zustand 설치와 화면 비활성화, 하단 파업 구현
const handleMailButtonclick = () => {
  alert("구현 준비 중입니다.");
};

const tailwindIconSizing = "h-8 sm: h-16"

export default function IndexContactMe() {
  return (
    <Center flex flexCol>
      <div className={`${themeClasses.text.primary} font-bold text-4xl`}>
        Contact Me!
      </div>
      <Center flex className={`mt-4 gap-4 text-gray-400`}>
        <a href="https://www.linkedin.com/in/atomicliquors/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} className={tailwindIconSizing}/>
        </a>
        <a
          href="https://discordapp.com/users/1026412188753207356"
          target="blank"
        >
          <FontAwesomeIcon icon={faDiscord} className={tailwindIconSizing}/>
        </a>
        <a href="https://github.com/atomicliquors" target="blank">
          <FontAwesomeIcon icon={faGithub} className={tailwindIconSizing}/>
        </a>
{/*
        <button onClick={handleMailButtonclick}>
          <svg
            height="50"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="52 26 88 66"
          >
            <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
            <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
            <path
              fill="#fbbc04"
              d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
            />
            <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
            <path
              fill="#c5221f"
              d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
            />
          </svg>
        </button>
         */}

      </Center>
    </Center>
  );
}
