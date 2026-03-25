
const fs = require('fs');
const path = require('path');
const filePath = 'D:\\- - - GENERAR PROMPS\\PELICULAS\\data_prompts.js';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    const PROMPT_DATABASE = {};
    const script = content.replace('const PROMPT_DATABASE', 'var DB');
    eval(script + '; global.PROMPT_DATABASE = DB;');
    console.log('Validacion exitosa!');
    console.log('Categorias encontradas:', Object.keys(global.PROMPT_DATABASE));
    console.log('Cantidad de prompts en CV:', global.PROMPT_DATABASE['CV'].length);
} catch (e) {
    console.error('ERROR DE SINTAXIS:', e.message);
    process.exit(1);
}
