let arrayData = [
    { id: 1, nombre:"entregaPaquete", fecha: "31-01-2023 05:00"},
    { id: 2, nombre:"entraCamion", fecha: "05-02-2023 07:00"},
    { id: 3, nombre:"llegaBodega", fecha: "17-02-2023 07:00"}, 
    { id: 4, nombre:"despachoEntrega", fecha: "17-02-2023 09:00"}];

let horaI = "09:00";
let horaF = "05:00";
let nombre1 = "entregaPaquete";
let nombre2 = "despachoEntrega";
let f1 =""
let f2 = ""

// Sabados y domingos no son dias laborales
// entregaPaquete, entraCamion, llegaBodega, despachoEntrega
function calcularHorasEntreFechas(fechaInicio, fechaFin) {
    const diffEnMs = fechaFin - fechaInicio;
    const diffEnHoras = diffEnMs / (1000 * 60 * 60);
    return diffEnHoras;
  }
  function calcularHorasLaboralesEntreFechas(fechaInicio, fechaFin) {
    const jornadaInicio = new Date(fechaInicio);
    jornadaInicio.setHours(8, 0, 0, 0);
    const jornadaFin = new Date(fechaInicio);
    jornadaFin.setHours(17, 0, 0, 0);
    let horasTotales = 0;
  
    while (jornadaInicio < fechaFin) {
      if (jornadaInicio.getDay() !== 6 && jornadaInicio.getDay() !== 0) {
        if (jornadaInicio < jornadaFin && fechaFin > jornadaFin) {
          horasTotales += calcularHorasEntreFechas(jornadaInicio, jornadaFin);
        } else if (jornadaInicio < fechaFin && fechaFin <= jornadaFin) {
          horasTotales += calcularHorasEntreFechas(jornadaInicio, fechaFin);
        }
      }
      jornadaInicio.setDate(jornadaInicio.getDate() + 1);
      jornadaInicio.setHours(8, 0, 0, 0);
      jornadaFin.setDate(jornadaFin.getDate() + 1);
      jornadaFin.setHours(17, 0, 0, 0);
    }
    return horasTotales;
  } 

/*function ejercicio (arrayData, fechaI, fechaF, nombre1, nombre2){
    for (let i = 0; i < arrayData.length; i++){
        if(arrayData[i].nombre === nombre1){
            f1 = arrayData[i].fecha;
        }
        if(arrayData[i].nombre === nombre2){
            f2 = arrayData[i].fecha;
        }
    }
    const diffEnHoras = calcularHorasLaboralesEntreFechas(new Date(f1), new Date(f2));
    
    console.log(diffEnHoras)

}

ejercicio(arrayData,nombre1,nombre2)*/


function calcularHorasEntreObjetos(arrayData, fechaInicio, fechaFin, objeto1, objeto2) {
    const objeto1Data = arrayData.find(obj => obj.nombre === objeto1);
    const objeto2Data = arrayData.find(obj => obj.nombre === objeto2);
  
    const diffEnHoras = calcularHorasLaboralesEntreFechas(new Date(objeto1Data.fecha), new Date(objeto2Data.fecha));
  
    return diffEnHoras;
  }

  calcularHorasEntreObjetos(arrayData, nombre1, nombre2)
