import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Turno = sequelize.define("Turno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  alumno_nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  docente_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
  bloque_horario: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: "pendiente", // pendiente, en progreso, finalizado
  },
  posicion: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  duracion: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
});

export default Turno;
