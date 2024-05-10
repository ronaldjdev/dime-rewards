import { PrismaClient } from "@prisma/client";

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();

// Definir el servicio de productos
export const productService = {
 
	async getAll() {
		try {
			const productos = await prisma.product.findMany();
			return productos;
		} catch (error) {
			throw new Error("Error al obtener los productos");
		}
	},

	// Método para obtener un product por su ID
	async getId(id) {
		try {
			const product = await prisma.product.findUnique({
				where: { id },
			});
			return product;
		} catch (error) {
			throw new Error("Error al obtener el product");
		}
	},

	// Método para crear un nuevo product
	async create(datosProducto) {
		try {
			const product = await prisma.product.create({
				data: datosProducto,
			});
			return product;
		} catch (error) {
			throw new Error("Error al crear el product");
		}
	},

	// Método para actualizar un product
	async update(id, nuevosDatosProducto) {
		try {
			const product = await prisma.product.update({
				where: { id },
				data: nuevosDatosProducto,
			});
			return product;
		} catch (error) {
			throw new Error("Error al actualizar el product");
		}
	},

	// Método para eliminar un product
	async destroy(id) {
		try {
			await prisma.product.delete({
				where: { id },
			});
		} catch (error) {
			throw new Error("Error al eliminar el product");
		}
	},
};

// Exportar el servicio de productos

