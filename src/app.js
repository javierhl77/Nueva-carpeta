const express = require ("express");
const PUERTO = 8080;
const app = express();
const productoRouter = require("./routes/product.router.js");
require("./database.js");
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas

app.use("/productos", productoRouter);

//listen
app.listen(PUERTO, () => {
    console.log(`escuchando en el puerto:${PUERTO}`)
});