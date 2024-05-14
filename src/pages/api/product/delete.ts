import { NextApiRequest, NextApiResponse } from "next";
import { productService } from "@/pages/lib/services/userService";
import { messageCRUD } from "@/pages/lib/message";

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
		const getProduct = await productService.destroy(id);
		return res.status(204).end();
	} catch (error) {
		return res.status(500).json({ error: messageCRUD.error.delete });
	}
}
