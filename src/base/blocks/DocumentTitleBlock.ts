import { Block } from "../../api/classes/Block";
import { BlockDesign, BlockDesignForm } from "../../api/classes/BlockDesign";
import { Definitions } from "../../api/classes/Definitions";

class DocumentTitleBlock extends Block {

    type = 'documentTitle';

    design = new BlockDesign({
        form: BlockDesignForm.REPORTER,
        returnType: 'string',
        title: 'document title',
        color: 0x5cb1d6,
    });

    onInit () {}

    onSerialize () {
        return {}
    }

    onCompile () {
        return `document.title`;
    }

}

Definitions.registerBlock(DocumentTitleBlock);