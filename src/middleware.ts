export { default } from 'next-auth/middleware'

// Usar una expresión regular para capturar todas las rutas bajo /api/
export const config = { matcher: ['/api/(.*)'] }
