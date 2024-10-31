import { Dato } from "./Dato.js";

export class Ingreso extends Dato {

  static contadorIngresos = 0; // variable para establecer el id de cada ingreso

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++ Ingreso.contadorIngresos;
  }

  get id() {
    return this._id;
  }
}