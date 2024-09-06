export class FieldDesign {

    acceptType: FieldDesignAcceptType = 'number';

    constructor (data: Partial<FieldDesign>) {
        Object.assign(this, data);
    }

}


export type FieldDesignAcceptType =
    | 'number'
    | 'string'
    | 'boolean';