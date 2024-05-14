import { NextApiRequest, NextApiResponse } from "next";
import { productService } from "@/pages/lib/services/userService";
import { Product } from "@prisma/client";
import { messageCRUD } from "@/pages/lib/message";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "PATCH") {
		res.setHeader("Allow", ["PATCH"]);
		return res.status(405).end(`Metodo ${req.method} no permitido`);
	}
  try {
    const { id }:any = req.query;
		const dataProduct: Omit<Product, "id"> = req.body;
		const updateProduct = await productService.update(id, dataProduct);
		const data = {
			message: messageCRUD.success.read,
			data: updateProduct,
		};
		return res.status(201).json(data);
	} catch (error) {
		return res.status(500).json({ error: messageCRUD.error.read });
	}
}
