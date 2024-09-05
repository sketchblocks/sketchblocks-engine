import { Block } from "../../api/classes/Block";
import { Field } from "../../api/classes/Field";

export class NumberField extends Field {

    value: number|Block = 0;

    onInit (value: number = 0) {
        return value;
    }

    onSerialize () {
        if (this.value instanceof Block) 
            return this.value.serialize();

        return +this.value;
    }

    onCompile () {
        if (this.value instanceof Block) 
            return this.value.compile();

        return this.value.toString();
    }

}