import { Block, BlockSerializedData } from "../../api/classes/Block";
import { BlockDesign, BlockDesignForm } from "../../api/classes/BlockDesign";
import { Definitions } from "../../api/classes/Definitions";

import { NumberField } from "../fields/NumberField";

export class ArithmeticAddBlock extends Block {

    type = 'arithmeticAdd';

    fields = {
        a: new NumberField().init(),
        b: new NumberField().init(),
    }

    design = new BlockDesign({
        form: BlockDesignForm.REPORTER,
        returnType: 'number',
        color: 0x59c059,
        components: [
            {
                type: 'field',
                forField: 'a',
                fieldType: 'number',
            },
            {
                type: 'label',
                label: '+',
            },
            {
                type: 'field',
                forField: 'b',
                fieldType: 'number',
            },
        ],
    });

    onInit (data: BlockSerializedData) {
        this.fields.a = new NumberField().init(data.fields.a);
        this.fields.b = new NumberField().init(data.fields.b);
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
        return `(${this.fields.a.compile()} + ${this.fields.b.compile()})`;
    }

}

Definitions.registerBlock(ArithmeticAddBlock);