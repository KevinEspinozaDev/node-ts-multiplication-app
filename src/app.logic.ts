import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const {b: base, s: showTable, l: limit} = yarg;

const outputPath: string = 'outputs';

let content: string = `
=======================================
            Tabla del ${base}
=======================================

`;
for (let i = 0; i < limit; i++) {
    const result: number = base * (i+1);

    content += `${base} x ${i+1} = ${result}\n`;
}

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`./${outputPath}/tabla-${base}.txt`, content);

if (showTable) console.log(content);
