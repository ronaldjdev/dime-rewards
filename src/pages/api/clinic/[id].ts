import { NextApiRequest, NextApiResponse } from "next";
import create from "./create";
import update from "./update";
import destroy from "./delete";
import detail from "./detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	  const {
			query: { id },
			method,
			body,
		} = req;

	switch (method) {

    case "GET":
      try {
        if (id) {
          return detail(req, res);
        }
      } catch (error) {
        return res.status(500).json({ error: "Error al obtener el elemento" });
      }
		case "PATCH":
			try {
				if (!body) {
					res
						.status(400)
						.json({ error: "El cuerpo de la solicitud está vacío" });
					return;
        }
				return update(req, res);
			} catch (error) {
				res.status(500).json({ error: "Error al actualizar el elemento" });
			}
    case "DELETE":
      try {
        if (!id) {
          res.status(400).json({ error: "El ID es obligatorio" });
          return;
        }
        return destroy(req, res);
      } catch (error) {
        res.status(500).json({ error: "Error al eliminar el elemento" });
      }
		default:
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			res.status(405).end(`Método ${method} no permitido`);
	}
}
