export function convertDate1(date: string): string{
    const day = String(date).substring(0,2);
    const month = String(date).substring(3,5);
    const year = String(date).substring(6);

    return `${year}-${month}-${day}`;
}