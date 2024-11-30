import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from "./config/db.js"
import Docente from "./models/docenteModel.js";
import Turno from "./models/turnoModel.js";
import HorarioDocente from "./models/horarioDocenteModel.js";


dotenv.config()
const app = express();
const port = 3000

app.use(express.json());
app.use(cors({
  origin: "*", 
  methods: ['GET', 'POST', 'OPTIONS']
}));

app.get("/", (req, res) => {
    res.send(" Turnero is working!");
  });

  