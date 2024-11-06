import { DataTypes } from "sequelize";
import sequelize from "./connect.js";

const jogo = sequelize.define("jogo", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        plataforma: {
            type: DataTypes.STRING,
            allowNull: true
        },
        horasJogadas: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: "jogo"
    }
)

export default jogo;