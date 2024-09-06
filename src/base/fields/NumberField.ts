import { Block } from "../../api/classes/Block";
import { Field } from "../../api/classes/Field";
import { FieldDesign } from "../../api/classes/FieldDesign";

export class NumberField extends Field {

    value: number = 0;

    design = new FieldDesign({
        acceptType: 'number',
    });

    onInit (value: number = 0) {
        return value;
    }

    onSerialize (value: number) {
        return +value;
    }

    onCompile (value: number) {
        return value.toString();
    }

}