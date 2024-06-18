import { NextApiRequest, NextApiResponse } from "next";

import { dataService } from "@/libs/services/dataService";
import { messageCRUD } from "@/libs/message";

/**
 * Handles the DELETE request for deleting a resource.
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 * @param {any} model - The model for the resource.
 * @return {Promise<void>} - Returns a promise that resolves to void.
 */
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
	model:any
) {
	if (req.method !== "DELETE") {
		res.setHeader("Allow", ["DELETE"]);
		return res.status(405).end(`Metodo ${req.method} no permitido`);
	}
	try {
		const { id } = req.body;
		await dataService.destroy(model, id);
		return res.status(204).end();
	} catch (error) {
		return res.status(500).json({ error: messageCRUD.error.delete });
	}
}