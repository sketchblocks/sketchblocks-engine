import { id } from "../util/general";
import { Block, BlockSerializedData } from "./Block";
import { Definitions } from "./Definitions";

export class Branch {

    children: Block[] = [];
    id: string = id();

    constructor (children?: BlockSerializedData[]) {
        if (children)
            children.forEach(value => {
                const TargetBlock = Definitions.findBlock(value.type);
                if (!TargetBlock) throw new Error(`Block type "${value.type}" not found in definitons`);
                const block = new TargetBlock().init(value);

                this.children.push(block);
            });
    }

    public serialize (): BlockSerializedData[] {   
        return this.children.map(b => b.serialize());
    }

    public compile (): string {
        return this.children.map(b => b.compile()).join('\n');
    }

}