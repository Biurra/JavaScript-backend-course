import express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROUTEuserdata = join(process.cwd(), 'data/userdata.json');
const userdata = JSON.parse(readFileSync(ROUTEuserdata, 'utf8'));

export { userdata };