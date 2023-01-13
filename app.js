import colors from 'colors';

//import {mostrarMenu, pausa} from './helpers/mensajes.js';
import {inquirerMenu, pausa} from './helpers/inquirer.js';


console.clear();

const main = async() => {

    let opt = '';

    do {
        
        opt = await inquirerMenu();
        console.log({opt});

        await pausa();

    } while (opt !== '0');

}

main();