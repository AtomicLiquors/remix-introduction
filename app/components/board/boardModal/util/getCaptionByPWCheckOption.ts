import { PWCheckOption, PWCheckOptionType } from "@/types/board/PasswordCheckOptionType";

const optionToCaption: Record<PWCheckOptionType, string> = {
    [PWCheckOption.ViewDetail] : "게시글 조회하기",
    [PWCheckOption.Edit] : "게시글 수정하기",
    [PWCheckOption.Delete] : "게시글 삭제하기",
    [PWCheckOption.None] : "선택된 유형이 없습니다.",
}

export const getCaptionByPWCheckOption: (option: PWCheckOptionType) => string = (option) => {
    return optionToCaption[option];
}