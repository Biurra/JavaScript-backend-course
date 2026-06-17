import { readFile } from 'fs';
import { join } from 'path';

const json = join(process.cwd(), '/data/userdata.json')

function parseJSON(file) {
    const parsedJSON = JSON.parse(file)
    return parsedJSON
}

console.log(parseJSON(json));

export { parseJSON };


