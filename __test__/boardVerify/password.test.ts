import { validatePassword } from "@/routes/board._index/util/validateForm";

describe('isValidPassword', () => {
    test('유효 케이스', () => {
        expect(validatePassword('abcD123')).toBe(true); // 영문 대소문자 + 숫자
        expect(validatePassword('Password1!')).toBe(true); // 영문 + 숫자 + 특수문자
        expect(validatePassword('1234')).toBe(true); // 숫자만
        expect(validatePassword('a1B2!')).toBe(true); // 영문 대소문자 + 숫자 + 특수문자
        expect(validatePassword('~!@#$%^&')).toBe(true); // 특수문자만
        expect(validatePassword('abcdEFGHijklmnO')).toBe(true); // 15자리 영문 대소문자
    });

    test('유효하지 않은 케이스', () => {
        expect(validatePassword('abc')).toBe(false); // 3자리 (짧음)
        expect(validatePassword('abcdefghijklmno123456')).toBe(false); // 21자리 (제한 초과)
        expect(validatePassword('abc def')).toBe(false); // 공백 포함
        expect(validatePassword('abc123$%^&*(DEFG')).toBe(false); // 16자리 (제한 초과)
    });
});