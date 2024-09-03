import { invalidMessage } from "@/routes/board._index/utils/invalidMessage";
import { validateAuthor } from "@/routes/board._index/utils/validateForm";

describe('작성자 이름 검증', () => {
    console.log(`현재 규칙 : ${invalidMessage.author}`)
    test('유효 케이스', () => {
        expect(validateAuthor('abc')).toBe(true); // 영문만
        expect(validateAuthor('가나다')).toBe(true); // 한글만
        expect(validateAuthor('abc123')).toBe(true); // 영문 + 숫자
        expect(validateAuthor('가나123')).toBe(true); // 한글 + 숫자
        expect(validateAuthor('abc_123')).toBe(true); // 영문 + 숫자 + 언더바
        expect(validateAuthor('가나다라')).toBe(true); // 4자리 한글
        expect(validateAuthor('abc_def')).toBe(true); // 영문 + 언더바
        expect(validateAuthor('가나_다라')).toBe(true); // 한글 + 언더바
        expect(validateAuthor('가a_1')).toBe(true); // 한글 + 영문 + 숫자 + 언더바
        expect(validateAuthor('ab12가나')).toBe(true); // 영문 + 숫자 + 한글
        expect(validateAuthor('가나다라마바사아')).toBe(true); // 8자리
        expect(validateAuthor('가나다라1_')).toBe(true); // 7자리 한글 + 숫자 + 언더바
    });

    test('유효하지 않은 케이스', () => {
        expect(validateAuthor('a')).toBe(false); // 1자리 (짧음)
        expect(validateAuthor('abcdefghijkl')).toBe(false); // 12자리 (길이 초과)
        expect(validateAuthor('가')).toBe(false); // 1자리 (짧음)
        expect(validateAuthor('abc!@#')).toBe(false); // 특수문자 포함
        expect(validateAuthor('  abc')).toBe(false); // 공백 포함 (앞)
        expect(validateAuthor('abc  ')).toBe(false); // 공백 포함 (뒤)
        expect(validateAuthor('abc def')).toBe(false); // 공백 포함 (중간)
        expect(validateAuthor('')).toBe(false); // 빈 문자열
        expect(validateAuthor('가나 다')).toBe(false); // 공백 포함
    });
});