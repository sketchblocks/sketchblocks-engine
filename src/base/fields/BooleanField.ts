import { Block } from "../../api/classes/Block";
import { Field } from "../../api/classes/Field";
import { FieldDesign } from "../../api/classes/FieldDesign";

export class BooleanField extends Field {

    value: boolean = false;

    design = new FieldDesign({
        acceptType: 'boolean',
    });

    onInit (value: boolean = false) {
        return value;
    }

    onSerialize (value: boolean) {
        return value;
    }

    onCompile (value: boolean) {
        return value
            ? 'true'
            : 'false';
    }

}