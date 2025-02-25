import LineBreak from "@/components/common/general/atoms/LineBreak";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <a
        href="https://github.com/AtomicLiquors/remix-introduction/issues"
        target="_blank"
        className="flex gap-3 p-5"
      >
        <FontAwesomeIcon className="w-12" icon={faGithub} />
        <div>
          <p className="font-bold text-lg">방문 중에 불편이 있으셨나요?</p>
          <p className="text-sm">
            <LineBreak>Github 저장소의 Issue를 통해</LineBreak>
            <LineBreak>버그를 제보해주세요!</LineBreak>
          </p>
        </div>
      </a>
      <div className="text-sm text-gray-400">
        ⓒ 2024 Hyobin Choe, AtomicLiquors All Rights Reserved.
      </div>
    </>
  );
}
