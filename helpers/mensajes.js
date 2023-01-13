import colors from 'colors';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { resolve } from 'node:path';


export const mostrarMenu = () => {

    return new Promise ( resolve => {
        
        console.clear();
        console.log('==================================='.cyan)
        console.log('       Seleccione una Opción'.cyan)
        console.log('===================================\n'.cyan)
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);
    
        const rl = readline.createInterface({ input, output });
    
        rl.question('Seleccione una opción: ', (opt) => {
            rl.close();
            resolve(opt);
        })
    });

}


export const pausa = () => {
    return new Promise (resolve => {
        
        const rl = readline.createInterface({ input, output });
    
        rl.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            rl.close();
            resolve();
        })
    })
}