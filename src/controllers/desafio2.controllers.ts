import { Request, Response } from "express";
import desafio2Service from "../services/desafio2.service";

const desafio2Controller = async (req: Request, res: Response) => {
  const data: any = req.body.valor;
  const desafio2 = await desafio2Service(data);
  return res.status(201).json(desafio2);
};

export { desafio2Controller };
