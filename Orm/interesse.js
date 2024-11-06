import { DataTypes } from "sequelize";
import sequelize from "./connect.js";

const interesse = sequelize.define("interesse",
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
        tableName: "interesse"
    }
)

export default interesse;