import { NextApiRequest, NextApiResponse } from "next";
import { productService } from "@/pages/lib/services/userService";
import { messageCRUD } from "@/pages/lib/message";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		res.setHeader("Allow", ["GET"]);
		return res.status(405).end(`Metodo ${req.method} no permitido`);
	}
	try {
    const {id}: any = req.query
		const products = await productService.getId(id);
		const data = {
			message: messageCRUD.success.read,
			data: products,
		};
		return res.status(201).json(data);
	} catch (error) {
		return res.status(500).json({ error: messageCRUD.error.read });
	}
}
