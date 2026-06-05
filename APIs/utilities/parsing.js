import { readFile } from 'fs';

const json = 'userdata.json'

function parseJSON(file) {
    const parsedJSON = JSON.parse(file)
    return parsedJSON
}

console.log(parseJSON(json));

export { parseJSON };


