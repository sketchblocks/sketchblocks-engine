import { id } from "../util/general";
import { Block, BlockSerializedData } from "./Block";
import { Definitions } from "./Definitions";

export abstract class Field {

    value:
        | number
        | string
        | boolean
        | Block = 0;

    id: string = id();

    abstract onInit (value?: FieldSerializedData): Exclude<typeof this.value, Block>;
    abstract onSerialize (value: Exclude<typeof this.value, Block>): FieldSerializedData;
    abstract onCompile (value: Exclude<typeof this.value, Block>): string;

    public init (value?: FieldSerializedData) {
        if (typeof value === 'object') {
            const TargetBlock = Definitions.findBlock(value.type);
            if (!TargetBlock) throw new Error(`Block type "${value.type}" not found in definitons`);
            this.value = new TargetBlock().init(value);
        } else {
            this.value = this.onInit(value);
        }
        return this;
    }

    public serialize (): FieldSerializedData {
        if (this.value instanceof Block) 
            return this.value.serialize();
        
        return this.onSerialize(this.value);
    }

    public compile (): string {
        if (this.value instanceof Block) 
            return this.value.compile();

        return this.onCompile(this.value);
    }

}

export type FieldSerializedData = 
    | number
    | string
    | boolean
    | BlockSerializedData;
    