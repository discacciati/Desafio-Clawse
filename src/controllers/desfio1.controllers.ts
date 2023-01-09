import { Request, Response } from "express";
import desafio1Service from "../services/desafio1.service";

const desafio1Controller = async (req: Request, res: Response) => {
  const data: any = req.body.valor;
  const desafio1 = await desafio1Service(data);
  return res.status(201).json(desafio1);
};

export { desafio1Controller };
