import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}