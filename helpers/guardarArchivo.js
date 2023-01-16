import { existsSync, readFileSync, writeFile, writeFileSync } from 'node:fs';
const archivo = './Databases/data.json';

export const guardarDB = (data) => {
    writeFileSync(archivo, JSON.stringify(data)); //hay que transformar estos datos en un string con JSON
}

export const leerDB = () => {
    if(!existsSync(archivo) ){
        return null;
    }

    const info = readFileSync(archivo, {encoding: 'utf-8'}); //el encoding para que no regrese los bytes
    const data = JSON.parse(info);

    //console.log(data);
    return data;
}