class Venta {
    constructor(data) {
        this.id = data.id;
        this.idUsuario = data.idUsuario;
        this.idProducto = data.idProducto;
        this.fecha = data.fecha;
        this.hora = data.hora;
        this.estatus = data.estatus || "vendido";
    }

    // Setters
    set id(id) {
        this._id = id;
    }

    set idUsuario(idUsuario) {
        if (idUsuario) {
            this._idUsuario = idUsuario;
        }
    }

    set idProducto(idProducto) {
        if (idProducto) {
            this._idProducto = idProducto;
        }
    }

    set fecha(fecha) {
        if (!fecha) {
            this._fecha = new Date().toLocaleDateString(); // Si no se proporciona fecha, usa la fecha actual
        } else {
            this._fecha = fecha;
        }
    }

    set hora(hora) {
        if (!hora) {
            this._hora = new Date().toLocaleTimeString(); // Si no se proporciona hora, usa la hora actual
        } else {
            this._hora = hora;
        }
    }

    set estatus(estatus) {
        if (estatus === "vendido" || estatus === "cancelado") {
            this._estatus = estatus;
        }
    }

    // Getters
    get id() {
        return this._id;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    get idProducto() {
        return this._idProducto;
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get estatus() {
        return this._estatus;
    }

    // Método para obtener los datos de la venta
    get datos() {
        if (this.id !== undefined) {
            return {
                id: this.id,
                idUsuario: this.idUsuario,
                idProducto: this.idProducto,
                fecha: this.fecha,
                hora: this.hora,
                estatus: this.estatus,
            };
        } else {
            return {
                idUsuario: this.idUsuario,
                idProducto: this.idProducto,
                fecha: this.fecha,
                hora: this.hora,
                estatus: this.estatus,
            };
        }
    }
}

module.exports = Venta;
