import { DataTypes } from "sequelize";
import sequelize from "./connect.js";

const conquista = sequelize.define("conquista", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jogo: {
            type: DataTypes.STRING,
            foreignKey: true
        }
    },
    {
        tableName: "conquista"
    }
)

export default conquista;