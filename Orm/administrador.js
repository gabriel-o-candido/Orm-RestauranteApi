import { DataTypes } from "sequelize";
import sequelize from "./connect.js ";

const administrador = sequelize.define("Administrador",
    {
        nivelPermissao: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    },
    {
        tableName: "administrador"
    }
)

export default administrador;