import Center from "@/components/common/Center";
import { themeClasses } from "@/theme/theme";

// To-Do : Zustand 설치와 화면 비활성화, 하단 파업 구현
const handleMailButtonclick = () => {
    alert('구현 준비 중입니다.');
}

export default function IndexContactMe() {
  return (
    <Center flex className="h-64">
        <div className={`${themeClasses.text.primary} font-bold text-h1`}>Contact Me!</div>
        <button onClick={handleMailButtonclick}>O</button>
    </Center>
  );
}
