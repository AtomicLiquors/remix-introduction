export const dateToString = (date: Date): string => {
    const dateObject = new Date(date);
    return `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`;;
}