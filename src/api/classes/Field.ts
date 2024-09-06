import { id } from "../util/general";
import { Block, BlockSerializedData } from "./Block";
import { Definitions } from "./Definitions";
import { FieldDesign } from "./FieldDesign";

export abstract class Field {

    abstract value:
        | number
        | string
        | boolean;

    abstract design: FieldDesign;

    block: Block|null = null;
    id: string = id();

    abstract onInit (value?: FieldSerializedData): Exclude<typeof this.value, Block>;
    abstract onSerialize (value: Exclude<typeof this.value, Block>): FieldSerializedData;
    abstract onCompile (value: Exclude<typeof this.value, Block>): string;

    public init (value?: FieldSerializedData) {
        if (typeof value === 'object') {
            const TargetBlock = Definitions.findBlock(value.type);
            if (!TargetBlock) throw new Error(`Block type "${value.type}" not found in definitons`);
            this.block = new TargetBlock().init(value);
        } else {
            this.value = this.onInit(value);
        }
        return this;
    }

    public serialize (): FieldSerializedData {
        if (this.block) 
            return this.block.serialize();
        
        return this.onSerialize(this.value);
    }

    public compile (): string {
        if (this.block) 
            return this.block.compile();

        return this.onCompile(this.value);
    }

}

export type FieldSerializedData = 
    | number
    | string
    | boolean
    | BlockSerializedData;
    