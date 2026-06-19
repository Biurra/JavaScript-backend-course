import { randomUUID } from 'crypto';

function genSerialNum() {
    return randomUUID().replace(/-/g, '').slice(0,12).toUpperCase();
}

export default genSerialNum;