import { invalidMessage } from "@/routes/board._index/utils/invalidMessage";
import { validateContent } from "@/routes/board._index/utils/validateForm";

describe('작성자 이름 검증', () => {
    console.log(`현재 규칙 : ${invalidMessage.content}`)
    test('유효 케이스', () => {
        expect(validateContent('안녕하세요')).toBe(true);
    });

    test('유효하지 않은 케이스', () => {
        expect(validateContent('')).toBe(false); 
    });
});