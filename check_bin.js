
const fs = require('fs');
const filePath = 'D:\\- - - GENERAR PROMPS\\PELICULAS\\data_prompts.js';
const buffer = fs.readFileSync(filePath);
console.log('Ultimos 100 bytes (hex):', buffer.slice(-100).toString('hex'));
console.log('Ultimos 100 bytes (ASCII):', buffer.slice(-100).toString('utf8'));
