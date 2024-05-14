import { NextApiRequest, NextApiResponse } from "next";
import { dataService } from "@/lib/services/dataService";
import { messageCRUD } from "@/lib/message";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "DELETE") {
		res.setHeader("Allow", ["DELETE"]);
		return res.status(405).end(`Metodo ${req.method} no permitido`);
	}
	try {
		const {id} = req.body;
		await dataService.destroy(id);
		return res.status(204).end();
	} catch (error) {
		return res.status(500).json({ error: messageCRUD.error.delete });
	}
}
