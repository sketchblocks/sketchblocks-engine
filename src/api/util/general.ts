export function repeatStr (str: string, count: number) {
    let newStr = '';
    for (let i = 0; i < count; i++) newStr += str;
    return newStr;
}

export function id (length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    
    return result;
}