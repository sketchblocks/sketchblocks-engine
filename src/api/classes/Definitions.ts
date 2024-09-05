import { Block, BlockSerializedData } from "./Block";
import { Field } from "./Field";

type AnyBlockConstructor = { new (data?: BlockSerializedData): Block }
type AnyFieldConstructor = { new (...args: any[]): Field }

export class Definitions {

    private static blocks: Map<string, AnyBlockConstructor> = new Map();
    private static fields: Map<string, AnyFieldConstructor> = new Map();

    static registerBlock (value: AnyBlockConstructor) {
        const type = (new value()).type;
        this.blocks.set(type, value);
    }

    static findBlock (type: string) {
        return this.blocks.get(type);
    }

    static getBlockType (value: Block) {
        for (const type of this.blocks.keys()) {
            const targetClass = this.blocks.get(type);
            if (!targetClass) continue;
            if (value instanceof targetClass)
                return type;
        }
        return;
    }

}