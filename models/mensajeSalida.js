var method = mensajeSalida.prototype;
function mensajeSalida(codigo, mensaje, data) {
    this.codigo = codigo;
    this.mensaje = mensaje;
    this.data = data;
}
module.exports = mensajeSalida;