import { Tarea } from './tarea.js';

export class Tareas { //crear una clase
    _listado = {};  //esto se maneja como un objeto en vez de como un arreglo // esto es una propiedad llamada listado

    get listadoArr(){ //getter
        const listado = []; //arreglo a llenar

        Object.keys(this._listado).forEach(key => { //esto retorna todas las llaves que contiene ese objeto
            const tarea = this._listado[key];
            listado.push(tarea);
            //console.log(key);
        }); 

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){

        const tarea = new Tarea(desc);
        
        this._listado[tarea.id] = tarea;        

    }
}