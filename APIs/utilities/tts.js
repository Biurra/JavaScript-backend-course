import { exec } from 'child_process';

function tts(text) {
    exec(`espeak-ng -s 120 -p 5 -v en-us "${text}"`);
}

export default tts;
