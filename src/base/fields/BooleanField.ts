import { Block } from "../../api/classes/Block";
import { Field } from "../../api/classes/Field";

export class BooleanField extends Field {

    value: boolean|Block = false;

    onInit (value: boolean = false) {
        return value;
    }

    onSerialize () {
        if (this.value instanceof Block) 
            return this.value.serialize();

        return this.value;
    }

    onCompile () {
        if (this.value instanceof Block) 
            return this.value.compile();

        return this.value
            ? 'true'
            : 'false';
    }

}