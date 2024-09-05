export function repeatStr (str: string, count: number) {
    let newStr = '';
    for (let i = 0; i < count; i++) newStr += str;
    return newStr;
}