import { isValidContent } from "@/routes/board._index/util/verify";
import { verifyMessage } from "@/routes/board._index/util/verifyMessage";


describe('작성자 이름 검증', () => {
    console.log(`현재 규칙 : ${verifyMessage.content}`)
    test('유효 케이스', () => {
        expect(isValidContent('안녕하세요')).toBe(true);
    });

    test('유효하지 않은 케이스', () => {
        expect(isValidContent('')).toBe(false); 
    });
});