import {
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PasswordChecker from "../PasswordChecker";
import BoardItemTitles from "./content/Titles";
import BoardItemContainer from "./layout/Container";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemBlockWrapper from "./layout/BlockWrapper";

export default function BoardItemCreate() {
  return (
    <>
      <BoardItemContainer>      
        <BoardItemBlockWrapper>
          <BoardItemFirstBlock>
            <div>
              <input
                type="text"
                className="border w-5/6"
                placeholder="작성자"
              />
              <input
                type="password"
                className="border w-5/6"
                placeholder="비밀번호"
              />
            </div>
          </BoardItemFirstBlock>
          <BoardItemMiddleBlock>
            <input type="text" placeholder="제목을 입력하세요." />
          </BoardItemMiddleBlock>
        </BoardItemBlockWrapper>

      </BoardItemContainer>
      <input type="textarea" className="border w-full h-auto"/>
    </>
  );
}
