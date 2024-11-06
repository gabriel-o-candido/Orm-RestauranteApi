import { Sequelize } from "sequelize";
import sequelize from "./connect.js";

import administrador from "./administrador.js";
import jogo from "./jogo.js";
import conquista from "./conquista.js";
import genero from "./genero.js";
import interesse from "./interesse.js";


jogo.hasMany(conquista);

sequelize.sync({force: true});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.administrador = administrador;
db.jogo = jogo;
db.conquista = conquista;
db.genero = genero;
db.interesse = interesse;

export default db;