import { Block } from "../../api/classes/Block";
import { Field } from "../../api/classes/Field";

export class StringField extends Field {

    value: string|Block = '';

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