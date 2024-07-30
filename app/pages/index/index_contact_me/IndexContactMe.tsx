import Center from "@/components/common/Center";

// To-Do : Zustand 설치와 화면 비활성화, 하단 파업 구현
const handleMailButtonclick = () => {
    alert('2kooong2');
}

export default function IndexContactMe() {
  return (
    <Center>
        <div className="text-h2">Contact Me!</div>
        <button onClick={handleMailButtonclick}>O</button>
    </Center>
  );
}
