const { ventasBD } = require("./conexion"); // Conexión a la BD de Firebase
const Venta = require("../clases/Venta");

function validar(venta) {
    var valido = false;
    if (venta.idUsuario != undefined && venta.idProducto != undefined) {
        valido = true;
    }
    return valido;
}

// Mostrar todas las ventas
async function mostrarVentas() {
    const ventas = await ventasBD.get();
    let ventasValidas = [];
    ventas.forEach(venta => {
        const venta1 = new Venta({ id: venta.id, ...venta.data() });
        if (validar(venta1.datos)) {
            ventasValidas.push(venta1.datos);
        }
    });
    return ventasValidas;
}

// Buscar venta por ID
async function buscarPorId(id) {
    const venta = await ventasBD.doc(id).get();
    const venta1 = new Venta({ id: venta.id, ...venta.data() });
    if (validar(venta1.datos)) {
        return venta1.datos;
    }
    return null;
}

// Crear nueva venta
async function nuevaVenta(data) {
    const venta1 = new Venta(data);
    if (validar(venta1.datos)) {
        await ventasBD.doc().set(venta1.datos);
        return true;
    }
    return false;
}

// Cancelar venta (Cambiar estatus a "cancelado")
async function cancelarVenta(id) {
    const venta = await ventasBD.doc(id).get();
    if (venta.exists) {
        await ventasBD.doc(id).update({ estatus: "cancelado" });
        return true;
    }
    return false;
}

module.exports = {
    mostrarVentas,
    buscarPorId,
    nuevaVenta,
    cancelarVenta
};
