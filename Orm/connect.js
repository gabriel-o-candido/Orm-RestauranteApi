import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: "restaurante",
    username: "root",
    password: "",
    host: "localhost",
    dialect: "mysql"
});

export default sequelize;