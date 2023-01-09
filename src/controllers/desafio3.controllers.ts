import { Request, Response } from "express";
import desafio3Service from "../services/desafio3.service";

const desafio3Controller = async (req: Request, res: Response) => {
  const data: object = req.body.valor;
  const desafio3 = await desafio3Service(data);
  return res.status(201).json(desafio3);
};

export { desafio3Controller };
