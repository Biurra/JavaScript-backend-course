import sql from './sql.js';
import genSerialNum from './serialnumgen.js';

async function uniqueSerialCHK(num) {
    const check = await sql`
    SELECT EXISTS (
        SELECT 1
        FROM instruments
        WHERE serial_number = ${num}
    ) AS exists
    `
    if (check[0].exists) {
        return false;
    } else {
        return true;
    }
};

export default uniqueSerialCHK;
