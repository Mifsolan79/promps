
const fs = require('fs');
const filePath = 'd:\\- - - GENERAR PROMPS\\PELICULAS\\data_prompts_v2.js';

try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extraer el objeto window.PROMPT_DATABASE (usando regex para encontrar el valor de PROFESIONES)
    const profMatch = content.match(/"PROFESIONES":\s*\[([\s\S]*?)\]/);
    if (!profMatch) throw new Error("No se encontró la categoría PROFESIONES");

    const rawArray = JSON.parse("[" + profMatch[1] + "]");
    
    const formattedArray = rawArray.map((p, index) => {
        const match = p.match(/\[(.*?)\]\s*\*\*(.*?)\*\*/);
        const title = match ? match[1] : `PROFESIONAL ${index + 1}`;
        const body = match ? match[2] : p;
        return {
            "id": `PROFESIONES_${index + 1}`,
            "number": (index + 1).toString().padStart(3, '0'),
            "style": "PROFESIONES",
            "title": title,
            "content": body
        };
    });

    const newProfString = `"PROFESIONES": ` + JSON.stringify(formattedArray, null, 4);
    content = content.replace(/"PROFESIONES":\s*\[[\s\S]*?\]/, newProfString);

    fs.writeFileSync(filePath, content);
    console.log('Formateados 100 prompts en PROFESIONES.');
} catch (e) {
    console.error('Error:', e.message);
}
