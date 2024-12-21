import Turno from "./turnoModel.js";
import Docente from "./docenteModel.js";
import HorarioDocente from "./horarioDocenteModel.js";


Docente.hasMany(HorarioDocente, {foreignKey: 'docente_id'});
HorarioDocente.belongsTo(Docente, {foreignKey: 'docente_id'});

Docente.hasMany(Turno, {foreignKey: 'docente_id'});
Turno.belongsTo(Docente, {foreignKey: 'docente_id'});

