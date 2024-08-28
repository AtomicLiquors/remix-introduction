const verifyRegex = {
  author: /^[0-9A-Za-zㄱ-ㅎㅏ-ㅣ가-힣_]{2,8}$/,
  password: /^[A-Za-z0-9~`!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>\/?]{4,15}$/,
};

export const isValidTitle = (title: string): boolean => {
  return title.length >= 4 && title.length <= 50;
};

export const isValidAuthor = (author: string): boolean => {
  return verifyRegex.author.test(author);
};

export const isValidPassword = (password: string): boolean => {
  return verifyRegex.password.test(password);
};

export const isValidContent = (content: string): boolean => {
  return content.length > 0;
};

export const isValidCreateInput = (
  title: string,
  content: string,
  author: string,
  password: string
): [result: boolean, msg: string] => {
  let result: boolean = true;
  let msg: string = "";

  if (!isValidTitle(title)) {
    result = false;
    msg = "제목";
  } else if (!isValidContent(content)) {
    result = false;
    msg = "내용";
  } else if (!isValidAuthor(author)) {
    result = false;
    msg = "작성자";
  } else if (!isValidPassword(password)) {
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
  
    if (!isValidTitle(title)) {
      result = false;
      msg = "제목";
    } else if (!isValidContent(content)) {
      result = false;
      msg = "내용";
    } 
      
    return [result, msg];
  };
  