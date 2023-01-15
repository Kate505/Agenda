import { Tarea } from './tarea.js';

export class Tareas {
    _listado = {};  //esto se maneja como un objeto en vez de como un arreglo

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){

        const tarea = new Tarea(desc);
        
        this._listado[tarea.id] = tarea;        

    }
}