import { invalidMessage } from "@/utils/board/invalidMessage";
import { validateContent } from "@/utils/board/validateForm";

describe('작성자 이름 검증', () => {
    console.log(`현재 규칙 : ${invalidMessage.content}`)
    test('유효 케이스', () => {
        expect(validateContent('안녕하세요')).toBe(true);
    });

    test('유효하지 않은 케이스', () => {
        expect(validateContent('')).toBe(false); 
    });
});