export class Contacto {
    constructor(
        public id: number,
        public nombre: string,
        public email: string,
        public facebook: string,
        public twitter:string,
    ){}
}

let contacto: Contacto = new Contacto();
contacto.nombre = "KeeCoder";
