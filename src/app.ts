import "express-async-errors";
import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { desafio1Controller } from "./controllers/desfio1.controllers";
import { desafio2Controller } from "./controllers/desafio2.controllers";
import { desafio3Controller } from "./controllers/desafio3.controllers";
import handleError from "./errors/handleError";

const app = express();
app.use(express.json());

app.post("/1", desafio1Controller);
app.get("/2", desafio2Controller);
app.get("/3", desafio3Controller);

app.use(handleError);

export default app;
