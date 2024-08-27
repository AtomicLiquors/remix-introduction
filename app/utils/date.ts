const MS_PER_MINUTE: number = 60 * 1000;
const MS_PER_HOUR: number = MS_PER_MINUTE * 60;
const MS_PER_DAY: number = MS_PER_HOUR * 24;
const MS_PER_MONTH: number = MS_PER_DAY * 30; // approximate
const MS_PER_YEAR: number = MS_PER_MONTH * 12; // approximate

export const dateToString = (date: Date): string => {
    const dateObject = new Date(date);
    return `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`;;
}

export const getTimeDifference = (date1: Date, date2: Date): string => {
    const diffInMs: number = date2.getTime() - date1.getTime();

    if (diffInMs < MS_PER_MINUTE) {
        return '방금';
    } else if (diffInMs < MS_PER_HOUR) {
        const diffInMinutes: number = Math.floor(diffInMs / MS_PER_MINUTE);
        return `${diffInMinutes}분 전`;
    } else if (diffInMs < MS_PER_DAY) {
        const diffInHours: number = Math.floor(diffInMs / MS_PER_HOUR);
        return `${diffInHours}시간 전`;
    } else if (diffInMs < MS_PER_MONTH) {
        const diffInDays: number = Math.floor(diffInMs / MS_PER_DAY);
        return `${diffInDays}일 전`;
    } else if (diffInMs < MS_PER_YEAR) {
        const diffInMonths: number = Math.floor(diffInMs / MS_PER_MONTH);
        return `${diffInMonths}개월 전`;
    } else {
        const diffInYears: number = Math.floor(diffInMs / MS_PER_YEAR);
        return `${diffInYears}년 전`;
    }
}
