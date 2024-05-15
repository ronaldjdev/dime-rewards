
// Definir el servicio de productos
export const dataService = {
	async getAll<T>(modelName: any): Promise<T[]> {
		try {
			const data = await modelName.findMany();
			return data as T[];
		} catch (error) {
			throw new Error(`Error al obtener los datos  `);
		}
	},

	// Método para obtener un elemento por su ID
	async getById<T>(modelName: any, id: string): Promise<T | null> {
		try {
			const data = await modelName.findUnique({
				where: { id },
			});
			return data;
		} catch (error) {
			throw new Error(`Error al obtener el elemento `);
		}
	},

	// Método para crear un nuevo elemento
	async create<T>(modelName: any, data: Omit<T, "id">): Promise<T> {
		try {
			const newData = await modelName.create({
				data,
			});
			return newData;
		} catch (error) {
			throw new Error(`Error al crear el elemento `);
		}
	},

	// Método para actualizar un elemento
	async update<T>(modelName: any, id: string, data: Omit<T, "id">): Promise<T> {
		try {
			const updatedData = await modelName.update({
				where: { id },
				data,
			});
			return updatedData;
		} catch (error) {
			throw new Error(`Error al actualizar el elemento `);
		}
	},

	// Método para eliminar un elemento
	async destroy<T>(modelName: any, id: string): Promise<void> {
		try {
			await modelName.delete({
				where: { id },
			});
		} catch (error) {
			throw new Error(`Error al eliminar el elemento `);
		}
	},
};