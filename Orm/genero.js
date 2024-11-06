import { DataTypes } from "sequelize";
import sequelize from "./connect.js";

const genero = sequelize.define("Genero", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "genero"
    }
)

export default genero;