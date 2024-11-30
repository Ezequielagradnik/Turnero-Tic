import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const HorarioDocente = sequelize.define("HorarioDocente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  docente_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
  bloque_horario: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  disponible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, 
  },
});

export default HorarioDocente;
