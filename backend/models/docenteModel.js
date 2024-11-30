import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Docente = sequelize.define("Docente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aula: {
    type: DataTypes.STRING,
    allowNull: true, // Puede ser null si no se asigna un aula al profe
  },
  horario_disponible: {
    type: DataTypes.JSONB, 
    allowNull: true,
  },
});

export default Docente;
