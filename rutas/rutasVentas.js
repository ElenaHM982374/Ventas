const rutas = require("express").Router();
const { mostrarVentas, nuevaVenta, buscarPorId, cancelarVenta } = require("../bd/ventasBD");

rutas.get("/", async (req, res) => {
    const ventasValidas = await mostrarVentas();
    res.json(ventasValidas);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    const ventaValida = await buscarPorId(req.params.id);
    res.json(ventaValida);
});

rutas.post("/nuevaVenta", async (req, res) => {
    const ventaGuardada = await nuevaVenta(req.body);
    res.json({ exito: ventaGuardada });
});

rutas.patch("/cancelarVenta/:id", async (req, res) => {
    const ventaCancelada = await cancelarVenta(req.params.id);
    res.json({ exito: ventaCancelada });
});

module.exports = rutas;
