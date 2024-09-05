import { Block, BlockSerializedData } from "../../api/classes/Block";
import { BlockDesign, BlockDesignForm } from "../../api/classes/BlockDesign";
import { Branch } from "../../api/classes/Branch";
import { Definitions } from "../../api/classes/Definitions";
import { indentChunk } from "../../api/util/codegen";

import { BooleanField } from "../fields/BooleanField";

export class IfElseBlock extends Block {

    type = 'ifElse';

    children = {
        if: new Branch(),
        else: new Branch(),
    }

    fields = {
        condition: new BooleanField().init(),
    }

    design = new BlockDesign({
        form: BlockDesignForm.BRANCH,
        returnType: 'void',
        title: 'if',
        color: 0xffab19,
        components: [
            {
                type: 'field',
                forField: 'condition',
                fieldType: 'boolean',
            },
            {
                type: 'branch',
                forBranch: 'if',
                label: 'then:'
            },
            {
                type: 'branch',
                forBranch: 'else',
                label: 'else:'
            },
        ],
    });

    onInit (data: BlockSerializedData) {
        this.fields.condition = new BooleanField().init(data.fields.condition);
        this.children.if = new Branch(data.children.if)
        this.children.else = new Branch(data.children.else)
    }

    onSerialize () {
        return {
            fields: {
                condition: this.fields.condition.serialize(),
            },
            children: {
                if: this.children.if.serialize(),
                else: this.children.else.serialize(),
            },
        }
    }

    onCompile () {
        let c = `if (${this.fields.condition.compile()}) {\n`;
        c += indentChunk(this.children.if.compile());

        c += `\n} else {\n`;
        c += indentChunk(this.children.else.compile());

        c += `\n}`;
        return c;
    }

}

Definitions.registerBlock(IfElseBlock);