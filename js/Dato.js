export class Dato{

  constructor(descripcion, valor){
    this._descripción = descripcion;
    this._valor = valor;
  }

  // ------------ Getters y Setters ---------------

  get descripcion() {
    return this._descripción;
  }

  set descripcion(descripcion){
    this._descripción = descripcion;
  }

  get valor() {
    return this._valor;
  }

  set valor(valor) {
    this._valor = valor;
  }
}