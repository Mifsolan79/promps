
const fs = require('fs');
const filePath = 'D:\\- - - GENERAR PROMPS\\PELICULAS\\data_prompts_v2.js';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    const script = content.replace('window.PROMPT_DATABASE', 'var DB');
    eval(script + '; global.PROMPT_DATABASE = DB;');
    console.log('Recuento de Prompts:');
    Object.keys(global.PROMPT_DATABASE).forEach(cat => {
        console.log(`- ${cat}: ${global.PROMPT_DATABASE[cat].length}`);
    });
} catch (e) {
    console.error('Error:', e.message);
}
