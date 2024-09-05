import { id } from "../util/general";
import type { BlockDesign } from "./BlockDesign";
import type { Branch } from "./Branch";
import type { Field, FieldSerializedData } from "./Field";

export abstract class Block {

    abstract type: string;
    abstract design: BlockDesign;

    id: string = id();
    
    readonly children: { [key: string]: Branch } = {};
    readonly fields: { [key: string]: Field } = {};

    protected abstract onInit (data: BlockSerializedData): void;
    protected abstract onSerialize (): Partial<BlockSerializedData>;
    protected abstract onCompile (): string;

    public init (data?: BlockSerializedData) {
        if (!data) return this;
        this.onInit(data);
        return this;
    }
    
    public serialize (): BlockSerializedData {
        const partialSerialize = this.onSerialize();
        return {
            type: this.type,
            fields: partialSerialize.fields ?? {},
            children: partialSerialize.children ?? {},
            extra: partialSerialize.extra,
        }
    }

    public compile (): string {
        return this.onCompile();
    }

}

export type BlockSerializedData = {
    type: string,
    fields: { [key: string]: FieldSerializedData },
    children: { [key: string]: BlockSerializedData[] },
    extra?: { [key: string]: any },
}