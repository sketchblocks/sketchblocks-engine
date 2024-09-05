import { repeatStr } from "./general";

export function indentChunk (chunk: string, levels: number = 4) {
    return chunk
        .split('\n')
        .map(c => repeatStr(' ', levels) + c)
        .join('\n');
}