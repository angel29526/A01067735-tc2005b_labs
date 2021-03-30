const db = require('../util/database');      

module.exports = class Clase {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //clases.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        
        return db.execute('SELECT * FROM clases')
                      
    }
}