const admin = require("firebase-admin");
const keys = require("../keys.json");

admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const bd = admin.firestore();
const usuariosBD = bd.collection("miejemploBD"); // Aquí asumo que esta es la colección de usuarios
const productosBD = bd.collection("productos");
const ventasBD = bd.collection("ventas"); // Nueva colección para las ventas

module.exports = {
    usuariosBD,
    productosBD,
    ventasBD // Exporta también la colección de ventas
};


//console.log(usuariosBD);
