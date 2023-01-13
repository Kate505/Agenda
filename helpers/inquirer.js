import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value:'2',
                name: '2. Listar tareas'
            },
            {
                value:'3',
                name: '3. Listar tareas completadas'
            },
            {
                value:'4',
                name: '4. Listar tareas pendientes'
            },
            {
                value:'5',
                name: '5. Completar tarea(s)'
            },
            {
                value:'6',
                name: '6. Borrar tarea'
            },
            {
                value:'0',
                name: '0. Salir'
            }
            
        ]
    }
]

const entrada = [
    {
        type: 'input',
        name: 'EnterKey',
        message: `Presione ${'enter'.green} para continuar`
    }
]

export const inquirerMenu = async() => {
    
    console.clear();
    console.log('==================================='.cyan)
    console.log('       Seleccione una Opción'.cyan)
    console.log('===================================\n'.cyan)

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

export const pausa = async() => {
    console.log('\n');
    await inquirer.prompt(entrada);
    
}