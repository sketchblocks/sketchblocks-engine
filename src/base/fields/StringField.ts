import { Block } from "../../api/classes/Block";
import { Field } from "../../api/classes/Field";
import { FieldDesign } from "../../api/classes/FieldDesign";

export class StringField extends Field {

    value: string = '';

    design = new FieldDesign({
        acceptType: 'string',
    });

    onInit (value: string = '') {
        return value;
    }

    onSerialize (value: string) {
        return value;
    }

    onCompile (value: string) {
        const valueEscaped = value
            .replaceAll('\\', '\\\\')
            .replaceAll('\n', '\\n')
            .replaceAll('"', '\\"');

        return `"${valueEscaped}"`;
    }

}