import { isValidPassword } from "@/routes/board._index/util/verify";

describe('isValidPassword', () => {
    test('유효 케이스', () => {
        expect(isValidPassword('abcD123')).toBe(true); // 영문 대소문자 + 숫자
        expect(isValidPassword('Password1!')).toBe(true); // 영문 + 숫자 + 특수문자
        expect(isValidPassword('1234')).toBe(true); // 숫자만
        expect(isValidPassword('a1B2!')).toBe(true); // 영문 대소문자 + 숫자 + 특수문자
        expect(isValidPassword('~!@#$%^&')).toBe(true); // 특수문자만
        expect(isValidPassword('abcdEFGHijklmnO')).toBe(true); // 15자리 영문 대소문자
    });

    test('유효하지 않은 케이스', () => {
        expect(isValidPassword('abc')).toBe(false); // 3자리 (짧음)
        expect(isValidPassword('abcdefghijklmno123456')).toBe(false); // 21자리 (제한 초과)
        expect(isValidPassword('abc def')).toBe(false); // 공백 포함
        expect(isValidPassword('abc123$%^&*(DEFG')).toBe(false); // 16자리 (제한 초과)
    });
});