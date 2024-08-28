
export const verifyMessage = {
    title: "게시글 제목은 4자리 이상, 50자리 이하로 입력해 주세요.",
    // [한 문장은 40자 안팎이 적당] https://www.hani.co.kr/arti/society/schooling/212012.html
    author: "작성자명은 공백 없이 2~8자리 한글, 영문, 숫자, 언더바(_) 조합으로 입력해 주세요.",
    password: "비밀번호는 공백 없이 4~15자리 영문 대소문자, 숫자, 특수문자 조합으로 입력해 주세요.",
    content: "내용을 입력해 주세요."
}


const verifyRegex = {
    author: /^[0-9A-Za-zㄱ-ㅎㅏ-ㅣ가-힣_]{2,8}$/,
    password: /^[A-Za-z0-9~`!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>\/?]{4,15}$/,
}

export const isValidTitle = (title: string): boolean => {
    return title.length >= 4 && title.length <= 50;
}

export const isValidAuthor = (author: string): boolean => {
    return verifyRegex.author.test(author);
}

export const isValidPassword = (password: string): boolean => {
    return verifyRegex.password.test(password);
}


export const isValidContent = (content:string): boolean => {
    return content.length > 0;
}
