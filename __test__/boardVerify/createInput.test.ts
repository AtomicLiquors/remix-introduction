import { isValidCreateInput } from "@/routes/board._index/util/verify";

/* To-Do : 메서드 모킹 시 타입에러 해결 */
/*
jest.mock('./path-to-your-method', () => ({
  isValidTitle: jest.fn(),
  isValidContent: jest.fn(),
  isValidAuthor: jest.fn(),
  isValidPassword: jest.fn(),
}));

describe('isValidCreateInput', () => {

beforeEach(() => {
    const isValidTitle = new isValidTitle();
})

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('모든 유효성 검사를 통과하는 경우', () => {
    isValidTitle.mockReturnValue(true);
    isValidContent.mockReturnValue(true);
    isValidAuthor.mockReturnValue(true);
    isValidPassword.mockReturnValue(true);

    const [result, msg] = isValidCreateInput('제목', '내용', '작성자', '비밀번호');

    expect(result).toBe(true);
    expect(msg).toBe("");
  });

  test('제목 유효성 검사를 통과하지 못하는 경우', () => {
    isValidTitle.mockReturnValue(false);
    isValidContent.mockReturnValue(true);
    isValidAuthor.mockReturnValue(true);
    isValidPassword.mockReturnValue(true);

    const [result, msg] = isValidCreateInput('제목', '내용', '작성자', '비밀번호');

    expect(result).toBe(false);
    expect(msg).toBe("제목");
  });

  test('내용 유효성 검사를 통과하지 못하는 경우', () => {
    isValidTitle.mockReturnValue(true);
    isValidContent.mockReturnValue(false);
    isValidAuthor.mockReturnValue(true);
    isValidPassword.mockReturnValue(true);

    const [result, msg] = isValidCreateInput('제목', '내용', '작성자', '비밀번호');

    expect(result).toBe(false);
    expect(msg).toBe("내용");
  });

  test('작성자 유효성 검사를 통과하지 못하는 경우', () => {
    isValidTitle.mockReturnValue(true);
    isValidContent.mockReturnValue(true);
    isValidAuthor.mockReturnValue(false);
    isValidPassword.mockReturnValue(true);

    const [result, msg] = isValidCreateInput('제목', '내용', '작성자', '비밀번호');

    expect(result).toBe(false);
    expect(msg).toBe("작성자");
  });

  test('비밀번호 유효성 검사를 통과하지 못하는 경우', () => {
    isValidTitle.mockReturnValue(true);
    isValidContent.mockReturnValue(true);
    isValidAuthor.mockReturnValue(true);
    isValidPassword.mockReturnValue(false);

    const [result, msg] = isValidCreateInput('제목', '내용', '작성자', '비밀번호');

    expect(result).toBe(false);
    expect(msg).toBe("비밀번호");
  });
});*/