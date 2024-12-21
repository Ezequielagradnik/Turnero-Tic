import Turno from './models/turnoModel';


export const GetTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll();
    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los turnos', error: error.message });
  }
};


export const GetTurnobyalumno = async (req, res) => {
  try {
    const { alumno_nombre } = req.params;
    const turnos = await Turno.findAll({ where: { alumno_nombre } });
    if (turnos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron turnos para este alumno' });
    }
    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los turnos del alumno', error: error.message });
  }
};


export const CreateTurno = async (req, res) => {
  try {
    const { alumno_nombre, docente_id, bloque_horario, posicion, duracion } = req.body;

    if (!alumno_nombre || !docente_id || !bloque_horario || !posicion) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    const nuevoTurno = await Turno.create({
      alumno_nombre,
      docente_id,
      bloque_horario,
      posicion,
      duracion,
    });

    res.status(201).json({ message: 'Turno creado exitosamente', turno: nuevoTurno });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el turno', error: error.message });
  }
};

export const UpdateTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    if (!['pendiente', 'en progreso', 'finalizado'].includes(estado)) {
      return res.status(400).json({ message: 'Estado inválido' });
    }

    const turno = await Turno.findByPk(id);
    if (!turno) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }

    await turno.update({ estado });
    res.status(200).json({ message: 'Estado del turno actualizado', turno });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el turno', error: error.message });
  }
};


export const DeleteTurno = async (req, res) => {
  try {
    const { id } = req.params;

    const turno = await Turno.findByPk(id);
    if (!turno) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }

    await turno.destroy();
    res.status(200).json({ message: 'Turno eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el turno', error: error.message });
  }
};
