
const dotenv = require("dotenv");

//hacerlo a mano;

const entorno = "produccion";

dotenv.config({
    path: entorno === "desarrollo"?"./.env.desarrollo":"./.env.produccion"
});

const configObject = {
    puerto: process.env.PUERTO,
    mongo_url: process.env.MONGO_URL
}

module.exports = configObject;