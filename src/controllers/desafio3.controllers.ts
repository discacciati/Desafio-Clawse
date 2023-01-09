import { Request, Response } from "express";
import desafio3Service from "../services/desafio3.service";

const desafio3Controller = async (req: Request, res: Response) => {
const { array, dir, key } = req.body.valor;
  const desafio3 = await desafio3Service({ array, dir, key });
  return res.status(201).json(desafio3);
};

export { desafio3Controller };
