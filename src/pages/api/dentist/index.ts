import { NextApiRequest, NextApiResponse } from "next";
import create from "./create";
import list from "./read";
import update from "./update";
import destroy from "./delete";
import detail from "./detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "POST":
			return create(req, res);
		case "GET":
			if (req.query.id) {
				return detail(req, res);
			} else {
				return list(req, res);
			}
		case "PUT":
			return update(req, res);
		case "DELETE":
			return destroy(req, res);
		default:
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			res.status(405).end(`Método ${method} no permitido`);
	}
}
