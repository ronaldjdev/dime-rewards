import { NextApiRequest, NextApiResponse } from "next";
import { dataService } from "@/lib/services/dataService";
import { Clinic } from "@prisma/client";
import { messageCRUD } from "@/lib/message";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.setHeader("Allow", ["POST"]);
		return res.status(405).end(`Metodo ${req.method} no permitido`);
	}
	try {
		const dataProduct: Omit<Clinic, "id"> = req.body;
		const newProduct = await dataService.create(dataProduct);
		const data = {
			message: messageCRUD.success.create,
			data: newProduct,
		};
		return res.status(201).json(data);
	} catch (error) {
		return res.status(500).json({ error: messageCRUD.error.create });
	}
}
