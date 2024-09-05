import { Branch } from './api/classes/Branch';

import './base/blocks/IfElseBlock';
import './base/blocks/PrintBlock';
import './base/blocks/LogicalAndBlock';
import './base/blocks/FinishBlock';


const code = new Branch([
    {
        type: 'ifElse',
        fields: { condition: {
            type: 'logicalAnd',
            fields: {
                a: true,
                b: true,
            },
            children: {},
        } },
        children: {
            if: [
                {
                    type: 'print',
                    fields: { text: 'Hello, world!' },
                    children: {},
                }
            ],
            else: [
                {
                    type: 'print',
                    fields: { text: 'Hello' },
                    children: {},
                },
                {
                    type: 'print',
                    fields: { text: 'World' },
                    children: {},
                },
            ]
        }
    },
    {
        type: 'finish',
        fields: {},
        children: {},
    }
]);

console.log(code.compile());