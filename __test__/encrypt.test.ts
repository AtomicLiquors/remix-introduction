import { encrypt, encryptWithSaltRounds, verifyPassword } from '@/utils/passwordEncrypt';

const expectAfterEncryption = (currPassword: string, prevPassword: string) => {
    expect(currPassword).toBeDefined();
    expect(currPassword).not.toBeNull();
    expect(currPassword).not.toBe(prevPassword);
}

describe('bcrypt encryption', () => {
    it('패스워드 암호화 후 검증: 일치', async () => {
        const rawPassword = 'P@33w0rD';
        const encryptedPassword = await encrypt(rawPassword);

        expectAfterEncryption(encryptedPassword, rawPassword);

        const inputPassword = 'P@33w0rD';
        const isMatch = await verifyPassword(inputPassword, encryptedPassword);
        expect(isMatch).toBe(true);
    });

    it('패스워드 암호화 후 검증: 불일치', async () => {
        const rawPassword = 'P@33w0rD';
        const encryptedPassword = await encrypt(rawPassword);

        expectAfterEncryption(encryptedPassword, rawPassword);

        const inputPassword = 'PASSWORD';
        const isMatch = await verifyPassword(inputPassword, encryptedPassword);
        expect(isMatch).toBe(false);
    });

    it('서로 다른 해시 값 생성 검증', async () => {
        const rawPassword = 'P@33w0rD';
        const encryptedPW1 = await encrypt(rawPassword);
        const encryptedPW2 = await encrypt(rawPassword);

        expectAfterEncryption(encryptedPW1, rawPassword);
        expectAfterEncryption(encryptedPW2, rawPassword);

        expect(encryptedPW1).not.toBe(encryptedPW2);
    });
});


describe('해시 함수 연산 속도 테스트', () => {
    const rawPassword = 'P@33w0rD';

    const saltRoundsArray = [8, 10, 12, 14];

    saltRoundsArray.forEach((saltRounds) => {
        it(`saltRound 값 ${saltRounds}에 대한 연산 속도 테스트`, async () => {
            const start = Date.now();

            const encryptedPassword = await encryptWithSaltRounds(rawPassword, saltRounds);

            const end = Date.now();
            const timeTaken = end - start;

            console.log(`saltRound 값이 ${saltRounds}일 경우 소요 시간 : ${timeTaken}ms`);

            expect(encryptedPassword).toBeDefined();
            expect(encryptedPassword).not.toBeNull();
            expect(encryptedPassword).not.toBe(rawPassword);

            // NOTE: 연산 시간은 실행 환경마다 다르다.
            if (saltRounds === 8) {
                expect(timeTaken).toBeLessThan(200);
            } else if (saltRounds === 14) {
                expect(timeTaken).toBeLessThan(2000);
            }
        });
    });
});