import express from 'express';
import {
  GetTurnos,
  GetTurnobyalumno,
  CreateTurno,
  UpdateTurno,
  DeleteTurno,
} from './controllers/turnoController.js';
import { verifyToken, verifyAdmin } from './middlewares/authMiddleware.js';

const router = express.Router();

// Rutas
router.get('/turnos', verifyToken, GetTurnos); 
router.get('/turnos/alumno/:alumno_nombre', verifyToken, GetTurnobyalumno); 
router.post('/turnos', verifyToken, CreateTurno); 
router.put('/turnos/:id', verifyToken, verifyAdmin, UpdateTurno); 
router.delete('/turnos/:id', verifyToken, verifyAdmin, DeleteTurno); 

export default router;
