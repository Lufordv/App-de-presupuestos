import { Dato } from "./Dato.js";

export class Gasto extends Dato {
  
  static contadorGastos = 0; // variable para establecer el id de cada gasto

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++ Gasto.contadorGastos;
  }

  get id() {
    return this._id;
  }
}
