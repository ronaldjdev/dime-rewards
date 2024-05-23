import { NextApiRequest, NextApiResponse } from "next";
import { dataService } from "@/lib/services/dataService";
import { Dentist, PrismaClient } from "@prisma/client";
import { messageCRUD } from "@/lib/message";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "PATCH") {
		res.setHeader("Allow", ["PATCH"]);
		return res.status(405).end(`Metodo ${req.method} no permitido`);
	}
	try {
		const { id }: any = req.query;
		const dataDentist: Omit<Dentist, "id"> = req.body;
		const prisma = new PrismaClient();

		const updateProduct = await dataService.update(prisma.dentist, id, dataDentist);
		const data = {
			message: messageCRUD.success.read,
			data: updateProduct,
		};
		return res.status(201).json(data);
	} catch (error) {
		return res.status(500).json({ error: messageCRUD.error.read });
	}
}
