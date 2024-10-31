import { Ingreso } from './Ingreso.js';
import { Gasto } from './Gasto.js';

const ingresos = [
  new Ingreso("Salario", 2100.00),
  new Ingreso("Venta coche", 1500.00)
];

const gastos = [
  new Gasto("Aquiler", 900),
  new Gasto("Ropa", 250)
];

const cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarGastos();
}

const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalGastos();
  let porcentajeGasto = totalGastos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeGasto);
  document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
  document.getElementById("gastos").innerHTML = formatoMoneda(totalGastos());
}

// Establece el tipo de moneda
const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-ES", {
    style:"currency",
    currency:"EUR",
    minimumFractionDigits:2
  });
}

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style:"percent",
    minimumFractionDigits:2
  });
}

// ------------ Funciones para gestionar los ingresos -----------------

const totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
}

const cargarIngresos = () => {
  let ingresosHTML = "";
  for(let ingreso of ingresos){
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
  <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${ingreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
          <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
          <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline"
                 onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
              </button>
          </div>
      </div>
  </div>
  `;
  return ingresoHTML;
}

window.eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id );
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
}

// ------------------- Funciones para gestionar los gastos ------------------

const totalGastos = () => {
  let totalGasto = 0;
  for (let gasto of gastos) {
    totalGasto += gasto.valor;
  }
  return totalGasto;
}

const cargarGastos = () => {
  let gastosHTML = "";
  for(let gasto of gastos){
    gastosHTML += crearGastoHTML(gasto);
  }
  document.getElementById("lista-gastos").innerHTML = gastosHTML;
}

const crearGastoHTML = (gasto) => {
  let gastoHTML = `
  <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${gasto.descripcion}</div>
      <div class="derecha limpiarEstilos">
          <div class="elemento_valor">+ ${formatoMoneda(gasto.valor)}</div>
          <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline"
                  onclick='eliminarGasto(${gasto.id})'></ion-icon>
              </button>
          </div>
      </div>
  </div>
  `;
  return gastoHTML;
}

window.eliminarGasto = (id) => {
  let indiceEliminar = gastos.findIndex( gasto => gasto.id === id );
  gastos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarGastos();
}

// --------------- Agregar nuevos gastos o ingresos --------------
window.agregarDato = () => {
  let form = document.getElementById("form");
  let tipo = form["tipo"];
  let descripcion = form["descripcion"];
  let valor = form["valor"]

  if(descripcion.value !== '' && valor.value !== ''){
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      descripcion.value = "";
      valor.value = "";
      cargarCabecero();
      cargarIngresos();
    }
    else if(tipo.value === "gasto"){
      gastos.push(new Gasto(descripcion.value, +valor.value));
      descripcion.value = "";
      valor.value = "";
      cargarCabecero();
      cargarGastos();
    }
  }
}

cargarApp();