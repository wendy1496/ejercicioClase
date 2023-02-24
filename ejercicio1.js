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

  function calcularHorasEntreObjetos(array, fechaInicio, fechaFin, objeto1, objeto2) {
    const objeto1Data = array.find(obj => obj.nombre === objeto1);
    const objeto2Data = array.find(obj => obj.nombre === objeto2);
  
    const diffEnHoras = calcularHorasLaboralesEntreFechas(new Date(objeto1Data.fecha), new Date(objeto2Data.fecha));
  
    return diffEnHoras;
  }

  



  