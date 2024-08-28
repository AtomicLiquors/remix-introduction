import { getTimeDifference } from "@/utils/date";

describe('getTimeDifference', () => {
    const now = new Date(); // Fixed "now" time for consistent testing

    it('방금', () => {
        const date1 = new Date(now.getTime() - 30 * 1000); // 30 seconds ago
        expect(getTimeDifference(date1, now)).toBe('방금');
    });

    it('n분 전', () => {
        const date1 = new Date(now.getTime() - 5 * 60 * 1000); // 5 minutes ago
        expect(getTimeDifference(date1, now)).toBe('5분 전');
    });

    it('n시간 전', () => {
        const date1 = new Date(now.getTime() - 3 * 60 * 60 * 1000); // 3 hours ago
        expect(getTimeDifference(date1, now)).toBe('3시간 전');
    });

    it('n일 전', () => {
        const date1 = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000); // 5 days ago
        expect(getTimeDifference(date1, now)).toBe('5일 전');
    });

    it('n개월 전', () => {
        const date1 = new Date(now.getTime() - 2 * 30 * 24 * 60 * 60 * 1000); // 2 months ago
        expect(getTimeDifference(date1, now)).toBe('2개월 전');
    });

    it('n년 전', () => {
        const date1 = new Date(now.getTime() - 2 * 12 * 30 * 24 * 60 * 60 * 1000); // 2 years ago
        expect(getTimeDifference(date1, now)).toBe('2년 전');
    });
});
