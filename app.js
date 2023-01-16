import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

//import {mostrarMenu, pausa} from './helpers/mensajes.js';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

const main = async () => {

    let opt = '';

    const tareas = new Tareas(); //Instancia de la clase tareas

    const tareasDB = leerDB();

    if (tareasDB) { //cargar tareas
        //Establecer las tareas
        tareas.cargarTareasFromArray(tareasDB);

    }

    do {
        //imprimir el menú
        opt = await inquirerMenu();
        //console.log({opt});

        switch (opt) {
            case '1': //Crear tarea
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                //console.log(desc);

                break;

            case '2': //Lisar todas las tareas
                tareas.listadoCompleto();
                //console.log(tareas.listadoArr);
                break;

            case '3': //Listar Completadas
                tareas.listarPendientesCompletadas(true);
                break;

            case '4': //Listar Pendientes
                tareas.listarPendientesCompletadas(false);
                break;
        }

        guardarDB(tareas.listadoArr); //comentar para probar solo


        // const tarea = new Tarea('Comprar el almuerzo');
        // const tareas = new Tareas();

        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);

        await pausa();

    } while (opt !== '0');

}

main();