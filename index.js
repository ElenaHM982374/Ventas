const express = require("express");
const productosRutas = require("./rutas/rutasProductos");
const usuariosRutas = require("./rutas/rutasUsuarios");
const ventasRutas = require("./rutas/rutasVentas"); 

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/productos", productosRutas);
app.use("/usuarios", usuariosRutas);
app.use("/ventas", ventasRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
