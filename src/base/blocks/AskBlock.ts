import { Block, BlockSerializedData } from "../../api/classes/Block";
import { BlockDesign, BlockDesignForm } from "../../api/classes/BlockDesign";
import { Definitions } from "../../api/classes/Definitions";

import { StringField } from "../fields/StringField";

export class AskBlock extends Block {

    type = 'ask';

    fields = {
        text: new StringField().init(),
    }

    design = new BlockDesign({
        form: BlockDesignForm.STACK,
        returnType: 'void',
        title: 'ask',
        color: 0x5cb1d6,
        components: [
            {
                type: 'field',
                forField: 'text',
                fieldType: 'string',
            },
            {
                type: 'label',
                label: 'and wait'
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
        return `prompt(${this.fields.text.compile()});`;
    }

}

Definitions.registerBlock(AskBlock);