import { Block } from "../../api/classes/Block";
import { BlockDesign, BlockDesignForm } from "../../api/classes/BlockDesign";
import { Definitions } from "../../api/classes/Definitions";

class FinishBlock extends Block {

    type = 'finish';

    design = new BlockDesign({
        form: BlockDesignForm.STACK,
        returnType: 'end',
        title: 'finish',
        color: 0xaa66ff,
    });

    onInit () {}

    onSerialize () {
        return {}
    }

    onCompile () {
        return `finish();`;
    }

}

Definitions.registerBlock(FinishBlock);