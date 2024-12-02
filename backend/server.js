import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from "./config/db.js"
import Docente from "./models/docenteModel.js";
import Turno from "./models/turnoModel.js";
import HorarioDocente from "./models/horarioDocenteModel.js";


dotenv.config()
const app = express();
const port = 3005;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000", //development mode, cambiar a posible hosteo
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.get("/", (_, res) => {
  res.send(" Turnero is working!");
});

app.listen(port, () => {
  console.log("Turnero listening on port:", port); 
}); 
