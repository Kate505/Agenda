import { Tarea } from './tarea.js';

export class Tareas { //crear una clase
    _listado = {};  //esto se maneja como un objeto en vez de como un arreglo // esto es una propiedad llamada listado

    borrarTarea (id = ''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

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

    listadoCompleto(){

        console.log();

        this.listadoArr.forEach((tarea, i) => {
            
            const {desc, completadoEn} = tarea;        //desestructuración 
            const indice = `${i+1}`.green;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${indice}. ${desc}  ::  ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true){
        
        console.log();
        let i = 1;

        this.listadoArr.forEach((tarea) => {
            
            const {desc, completadoEn} = tarea;        //desestructuración 
            const indice = `${i+1}`.green;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            if (completadas) {
                if(completadoEn){
                    console.log(`${(i + '.').green} ${desc}  ::  ${completadoEn.green}`);
                    i++;
                }
                
            }else{
                if(!completadoEn){
                    console.log(`${(i + '.').green} ${desc}  ::  ${estado}`);
                    i++;
                }
            }


            
            
        });
    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

         this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
         });
    }
}