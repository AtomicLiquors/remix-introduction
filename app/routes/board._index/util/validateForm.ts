//To-Do : 글자수 제한 변수화, 정규식/조건식/메시지에 반영

const verifyRegex = {
  author: /^[0-9A-Za-zㄱ-ㅎㅏ-ㅣ가-힣_]{2,8}$/,
  password: /^[A-Za-z0-9~`!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>\/?]{4,15}$/,
};

export const validateTitle = (title: string): boolean => {
  return title.length >= 4 && title.length <= 50;
};

export const validateAuthor = (author: string): boolean => {
  return verifyRegex.author.test(author);
};

export const validatePassword = (password: string): boolean => {
  return verifyRegex.password.test(password);
};

export const validateContent = (content: string): boolean => {
  return content.length > 0 && content.length <= 1000 ;
};

export const validateCreateInput = (
  title: string,
  content: string,
  author: string,
  password: string
): [result: boolean, msg: string] => {
  let result: boolean = true;
  let msg: string = "";

  if (!validateTitle(title)) {
    result = false;
    msg = "제목";
  } else if (!validateContent(content)) {
    result = false;
    msg = "내용";
  } else if (!validateAuthor(author)) {
    result = false;
    msg = "작성자";
  } else if (!validatePassword(password)) {
    result = false;
    msg = "비밀번호";
  }

  return [result, msg];
};

export const isValidEditInput = (
    title: string,
    content: string,
  ): [result: boolean, msg: string] => {
    let result: boolean = true;
    let msg: string = "";
  
    if (!validateTitle(title)) {
      result = false;
      msg = "제목";
    } else if (!validateContent(content)) {
      result = false;
      msg = "내용";
    } 
      
    return [result, msg];
  };
  