import { Block, BlockSerializedData } from "../../api/classes/Block";
import { BlockDesign, BlockDesignForm } from "../../api/classes/BlockDesign";
import { Definitions } from "../../api/classes/Definitions";

import { StringField } from "../fields/StringField";

export class PrintBlock extends Block {

    type = 'print';

    fields = {
        text: new StringField().init(),
    }

    design = new BlockDesign({
        form: BlockDesignForm.STACK,
        returnType: 'void',
        title: 'print',
        components: [
            {
                type: 'field',
                forField: 'text',
                fieldType: 'string',
            },
        ],
    });

    onInit (data: BlockSerializedData) {
        this.fields.text = new StringField().init(data.fields.text);
    }

    onSerialize () {
        return {
            fields: {
                text: this.fields.text.serialize(),
            }
        }
    }

    onCompile () {
        return `print(${this.fields.text.compile()});`;
    }

}

Definitions.registerBlock(PrintBlock);