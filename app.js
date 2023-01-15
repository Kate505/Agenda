import colors from 'colors';

//import {mostrarMenu, pausa} from './helpers/mensajes.js';
import {inquirerMenu, pausa, leerInput} from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

const main = async() => {

    let opt = '';

    const tareas = new Tareas(); //Instancia de la clase tareas

    do {
        
        opt = await inquirerMenu();
        //console.log({opt});

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                //console.log(desc);
                
                break;
        
            case '2':
                console.log(tareas._listado);
                break;
        }
        

        // const tarea = new Tarea('Comprar el almuerzo');
        // const tareas = new Tareas();

        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);

        await pausa();

    } while (opt !== '0');

}

main();