import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const UserScore = sequelize.define("UserScore", {
  name: { type: DataTypes.STRING, allowNull: false },
    score: { type: DataTypes.INTEGER, allowNull: false },
});

export default UserScore;