const mensajeSalida = require('../models/mensajeSalida');
const codigoRespuesta = require('../models/codigoRespuesta');
const convenios = require('../data/convenios');

const findConvenios = (req, res) => {
  try {
    return res.status(200).send(new mensajeSalida(
      codigoRespuesta.OBTENER_CONVENIOS.SUCCESS.code,
      codigoRespuesta.OBTENER_CONVENIOS.SUCCESS.desc,
      { convenios: convenios }
    ));
  } catch (error) {
    console.log('Se produjo un problema:', error);
    return res.status(500).send(new mensajeSalida(
      codigoRespuesta.OBTENER_CONVENIOS.ERROR.code,
      codigoRespuesta.OBTENER_CONVENIOS.ERROR.desc,
      {}
    ));
  }
};
const findConveniosById = (req, res) => {
  try {
    const { id } = req.params;
    if (id == undefined) {
      return res.status(400).send(new mensajeSalida(
        codigoRespuesta.OBTENER_CONVENIO_ID.ERROR.code,
        'Data error',
        {}
      ));
    }
    for (let convenio of convenios) {
      // console.log(convenio.idConvenio, id);
      if (convenio.idConvenio === Number(id)) {
        let tipoCodigo = 'No';
        let nombreIdentificador = 'Número de cliente';
        let busquedas = agregarBusquedas([
          { nombre: 'rut', tipo: 'alfanumerico', placeholder: 'Ingrese rut con digito verificador', pattern: '^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$' },
          { nombre: 'direccion', tipo: 'alfanumerico', placeholder: 'Ingrese su dirección', pattern: '[0-9a-zA-z][#]' }
        ]);
        console.log(convenio);
        switch (convenio.servicio.toLocaleLowerCase()) {
          case 'enor':
            tipoCodigo = 'EAN-13';
            nombreIdentificador = 'Número de cliente';
            break;
          case 'metrogas':
            tipoCodigo = 'QR';
            break;
          case 'autopista central':
            tipoCodigo = 'UPC-A';
            break;
          case 'movistar hogar':
            tipoCodigo = 'EAN-13';
            nombreIdentificador = 'rut';
            busquedas = agregarBusquedas([
              { nombre: 'telefono', tipo: 'numerico', placeholder: 'Ingrese su telefono', pattern: '[0-9]' }
            ]);
            break;
          case 'abcdin':
            tipoCodigo = 'EAN-13';
            nombreIdentificador = 'rut';
            busquedas = agregarBusquedas([
              //{ nombre: 'direccion', tipo: 'alfanumerico', placeholder: 'Ingrese su dirección', pattern: '[0-9a-zA-z][#]' }
            ]);
            break;
          default:
            break;
        }
        const ayuda = {
          ayuda: {
            "nombreIdentificador": nombreIdentificador,
            "tipoCodigo": tipoCodigo,
            "imagenAyuda": convenio['imgCuenta'],
            "busqueda": busquedas
          }
        };
        return res.status(200).send(new mensajeSalida(
          codigoRespuesta.OBTENER_CONVENIO_ID.SUCCESS.code,
          codigoRespuesta.OBTENER_CONVENIO_ID.SUCCESS.desc,
          Object.assign({}, convenio, ayuda)
        ));
      }
    }
    return res.status(200).send(new mensajeSalida(
      codigoRespuesta.OBTENER_CONVENIO_ID.SUCCESS.code,
      'Convenio no encontrado',
      {}
    ));
  } catch (error) {
    console.log('Se produjo un problema:', error);
    return res.status(500).send(new mensajeSalida(
      codigoRespuesta.OBTENER_CONVENIO_ID.ERROR.code,
      codigoRespuesta.OBTENER_CONVENIO_ID.ERROR.desc,
      {}
    ));
  }
};

function agregarBusquedas(valores) {
  let busquedas = [];
  for (let valor of valores) {
    let busquedaAux = new Busqueda(valor.nombre, valor.tipo, valor.placeholder, valor.pattern);
    busquedas.push(busquedaAux);
  }
  return busquedas;
}
class Busqueda {
  constructor(nombre, tipo, placeholder, pattern) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.placeholder = placeholder;
    this.pattern = pattern;
  }
}
module.exports = {
  findConvenios,
  findConveniosById
};