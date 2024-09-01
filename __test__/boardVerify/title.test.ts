import { invalidMessage } from "@/routes/board._index/utils/invalidMessage";
import { validateTitle } from "@/routes/board._index/utils/validateForm";

describe('작성자 이름 검증', () => {
    console.log(`현재 규칙 : ${invalidMessage.content}`)
    test('유효 케이스', () => {
        expect(validateTitle('사자성어')).toBe(true); // 4자리
        expect(validateTitle('일부 언론에서는 보고서 가운데 자립형 사립고나 비평준화 고교와 일반 고교를 서로 비교한다.')).toBe(true); //50자리
    });

    test('유효하지 않은 케이스', () => {
        expect(validateTitle('세글자')).toBe(false); 
        expect(validateTitle('명백한 불법행위는 사법처리가 가능하지만, 법 위반 여부가 모호하거나 중요 공약을 번복한 경우')).toBe(false); //51자리
    });
});