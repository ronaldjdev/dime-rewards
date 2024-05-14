import { PrismaClient, Product } from "@prisma/client";

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();

// Definir el servicio de productos
export const productService = {
 
	async getAll(): Promise<Product[]> {
		try {
			const productos = await prisma.product.findMany();
			return productos;
		} catch (error) {
			throw new Error("Error al obtener los productos");
		}
	},

	// Método para obtener un product por su ID
	async getId(id: string): Promise<Product | null> {
		try {
			const product = await prisma.product.findUnique({
				where: { id },
			});
			return product;
		} catch (error) {
			throw new Error("Error al obtener el producto");
		}
	},

	// Método para crear un nuevo product
	async create(data: Omit<Product, "id">): Promise<Product> {
		try {
			const product = await prisma.product.create({
				data,
			});
			return product;
		} catch (error) {
			throw new Error("Error al crear el product");
		}
	},

	// Método para actualizar un product
	async update(id: string, data: Omit<Product, "id">): Promise<Product> {
		try {
			const product = await prisma.product.update({
				where: { id },
				data,
			});
			return product;
		} catch (error) {
			throw new Error("Error al actualizar el product");
		}
	},

	// Método para eliminar un product
	async destroy(id: string): Promise<void> {
		try {
			await prisma.product.delete({
				where: { id },
			});
		} catch (error) {
			throw new Error("Error al eliminar el producto");
		}
	},
};

// Exportar el servicio de productos

