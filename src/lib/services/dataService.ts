import { PrismaClient, Product } from "@prisma/client";

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();

// Definir el servicio de productos
export const dataService = {
	async getAll<T>(): Promise<T[]> {
		try {
			let modelName = T.toLowerCase();
			const data = await prisma[T.toLowerCase()].findMany();
			return data;
		} catch (error) {
			throw new Error(`Error al obtener los datos de ${T}`);
		}
	},

	// Método para obtener un elemento por su ID
	async getId<T>(id: string): Promise<T | null> {
		try {
			const data = await prisma[T.toLowerCase()].findUnique({
				where: { id },
			});
			return data;
		} catch (error) {
			throw new Error(`Error al obtener el elemento ${T}`);
		}
	},

	// Método para crear un nuevo elemento
	async create<T>(data: Omit<T, "id">): Promise<T> {
		try {
			const newData = await prisma[T.toLowerCase()].create({
				data,
			});
			return newData;
		} catch (error) {
			throw new Error(`Error al crear el elemento ${T}`);
		}
	},

	// Método para actualizar un elemento
	async update<T>(id: string, data: Omit<T, "id">): Promise<T> {
		try {
			const updatedData = await prisma[T.toLowerCase()].update({
				where: { id },
				data,
			});
			return updatedData;
		} catch (error) {
			throw new Error(`Error al actualizar el elemento ${T}`);
		}
	},

	// Método para eliminar un elemento
	async destroy<T>(id: string): Promise<void> {
		try {
			await prisma[T.toLowerCase()].delete({
				where: { id },
			});
		} catch (error) {
			throw new Error(`Error al eliminar el elemento ${T}`);
		}
	},
};

[]