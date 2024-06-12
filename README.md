![GitHub repo size](https://img.shields.io/github/repo-size/ronaldjdev/DIME-rewards?style=plastic)
![GitHub issues](https://img.shields.io/github/issues/ronaldjdev/DIME-rewards?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ronaldjdev/DIME-rewards?style=plastic)
![GitHub license](https://img.shields.io/github/license/ronaldjdev/DIME-rewards?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/ronaldjdev/DIME-rewards?style=plastic)
# DIME Rewards


**Distribuidora de Insumos Odontológicos Especializados (DIME)**

## Descripción

DIME Rewards es una aplicación diseñada específicamente para odontólogos, ofreciendo un plan de puntos que permite a los usuarios acumular puntos y canjearlos por productos gratuitos, descuentos en tienda y más. Nuestra plataforma está enfocada en proporcionar un valor añadido a los profesionales de la odontología, incentivando la fidelización a través de recompensas atractivas.

## Características

- **Acumulación de Puntos**: Los odontólogos pueden acumular puntos mediante la compra de productos y servicios.
- **Canje de Recompensas**: Los puntos acumulados se pueden canjear por productos gratuitos, descuentos en tienda y otros beneficios exclusivos.
- **Historial de Puntos**: Los usuarios pueden ver su historial de puntos acumulados y canjeados.
- **Notificaciones**: Mantén a los usuarios informados sobre nuevas promociones y ofertas especiales.

## Tecnologías Utilizadas

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma ORM](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ronaldjdev/dime-rewards
   ```

2. **Instalar las dependencias:**
   ```bash
   cd dime-rewards
   npm install
   ```

3. **Configurar la base de datos:**
   - Crear una base de datos PostgreSQL.
   - Configurar las variables de entorno en `.env` con las credenciales de la base de datos.

4. **Migrar la base de datos:**
   ```bash
   npx prisma migrate dev
   ```

5. **Iniciar la aplicación:**
   ```bash
   npm run dev
   ```

## Contribuir

Si deseas contribuir al desarrollo de DIME Rewards, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios necesarios y haz commits (`git commit -m 'Agrega nueva característica'`).
4. Empuja los cambios a tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request para revisar tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
