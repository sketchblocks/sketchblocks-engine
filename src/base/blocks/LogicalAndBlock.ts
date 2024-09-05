import { Block, BlockSerializedData } from "../../api/classes/Block";
import { BlockDesign, BlockDesignForm } from "../../api/classes/BlockDesign";
import { Definitions } from "../../api/classes/Definitions";

import { BooleanField } from "../fields/BooleanField";

export class LogicalAndBlock extends Block {

    type = 'logicalAnd';

    fields = {
        a: new BooleanField().init(),
        b: new BooleanField().init(),
    }

    design = new BlockDesign({
        form: BlockDesignForm.REPORTER,
        returnType: 'boolean',
        color: 0x59c059,
        components: [
            {
                type: 'field',
                forField: 'a',
                fieldType: 'boolean',
            },
            {
                type: 'label',
                label: 'and',
            },
            {
                type: 'field',
                forField: 'b',
                fieldType: 'boolean',
            },
        ],
    });

    onInit (data: BlockSerializedData) {
        this.fields.a = new BooleanField().init(data.fields.a);
        this.fields.b = new BooleanField().init(data.fields.b);
    }

    onSerialize () {
        return {
            fields: {
                a: this.fields.a.serialize(),
                b: this.fields.b.serialize(),
            },
        }
    }

    onCompile () {
        return `(${this.fields.a.compile()} && ${this.fields.b.compile()})`;
    }

}

Definitions.registerBlock(LogicalAndBlock);