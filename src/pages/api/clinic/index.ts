import { NextApiRequest, NextApiResponse } from "next";
import create from "./create";
import list from "./read";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method, body } = req;

	switch (method) {
		case "POST":
			if (!body) {
				res.status(400).json({ error: "El cuerpo de la solicitud está vacío" });
				return;
			}
			return create(req, res);
		case "GET":
				return list(req, res);
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Método ${method} no permitido`);
	}
}
