export class BlockDesign {

    form: BlockDesignForm = BlockDesignForm.STACK;
    returnType: BlockDesignReturnType = 'void';
    returnTypeClass: string|null = null;

    title: string|null = null;
    color: number = 0x000000;

    components: BlockDesignComponent[] = [];

    constructor (data: Partial<BlockDesign>) {
        Object.assign(this, data);
    }

}

export enum BlockDesignForm {
    STACK    = 'stack',
    REPORTER = 'reporter',
    BRANCH   = 'branch',
}

export type BlockDesignReturnType =
    | 'void'
    | 'number'
    | 'string'
    | 'boolean'
    | 'class'
    | 'end';

export type BlockDesignComponent = 
    | BlockDesignComponentField
    | BlockDesignComponentBranch
    | BlockDesignComponentLabel;

export type BlockDesignFieldType = 
    | 'number'
    | 'string'
    | 'boolean'
    | 'class';

export type BlockDesignComponentField = {
    type: 'field',
    forField: string,
    fieldType: BlockDesignFieldType,
    fieldTypeClass?: string,
    fieldIsEnum?: boolean,
    fieldEnumOptions?: {
        key: string,
        value: string,
        label: string,
    }[],
}

export type BlockDesignComponentBranch = {
    type: 'branch',
    forBranch: string,
    label: string|null,
}

export type BlockDesignComponentLabel = {
    type: 'label',
    label: string,
}