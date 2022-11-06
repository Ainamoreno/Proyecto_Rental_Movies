# Proyecto VideoClub

En este proyecto se nos pide crear la parte backend para una aplicación de alquiler de películas.

Consta de 7 tablas (películas, series, articulos, alquileres_articulos, alquileres, usuarios y roles).

![image](https://user-images.githubusercontent.com/110055279/200183884-dda01f9a-1703-4d4f-adce-6a902318fbac.png)

### Pasos a seguir para iniciar el proyecto en local:
- Intalar **NodeJS** desde su página oficial (https://nodejs.org/en/)
- Clonar el proyecto en nuestro equipo desde un terminal:

```$git clone <<url-del-repositorio>>```

- Instalar las dependencias utilizadas en el proyecto:

```npm i ```

### Pasos para crear la base de datos

- Añadimos al archivo .config los datos de la bbdd que se adjunta con el proyecto.

- Renombramos el archivo '.env.example' a '.env' y añadimos los datos correspondientes que adjunto en el .txt y añadimos en JWT_SECRET el string que deseemos.
- Desde el Workbench accedemos a la conexión de Mysql y creamos la base de datos con : ```create database railway```

- Para crear las tablas: entrar en el archivo index.js y en la línea 21 cambiar el ```db.authenticate()``` por:

```sequelize.sync({force: true})```

- Arrancamos el servidor con ```npm run dev ``` y se migraran todas las tablas a la ddbb.
- Una vez migradas, 'CTRL+C' para dejar de estar con el servidor arrancado.
- Volvemos al index.js y ```sequelize.sync({force: true})``` lo cambiamos por:
```db.authenticate()```
- Para crear los registros: 
```npx sequelize-cli db:seed:all ```

### Funciones para realizar con la API

Podemos importar la colección que he realizado en Postman desde este link: 'https://www.postman.com/collections/d09b3ee8be7d8ebf0e84'

### Tecnologías utilizadas

**Bcrypt**: para encriptar las contraseñas

**Express**: Entorno de trabajo que nos permite realizar la bbdd y la API junto con otras tecnologías.

**JsonWebToken**: para generar tokens

**Sequelize**: para poder gestionar y manipular la bbdd (ORM)

### Estructura del proyecto

Consta de una carpeta de controllers (se encuentran los controlladores de películas, series, usuarios y préstamos), middleware (donde se encuentran los middleware de autentificación), migrations y seeders (migraciones de las tablas y los registros de cada una de las tablas), models (los modelos de todas las tablas), services (los servicios de autentificación), views (las rutas y endpoints de películas, series, usuarios y préstamos), archivo de router.js e index.js.

### Endpoints que se pueden realizar:

Sin login:

● Listado de películas top rated.

● Obtener una película según su id.

● Obtener una película por título.

● Obtener películas con determinado género (indicando nombre, no id).

● Obtener series top rated.

● Obtener series por id.

● Obtener series por título.

● Obtener series que vayan a tener un capítulo emitido en los próximos 7 dias.

● Obtener series que vayan a tener un pase en teatros o cines.

● Dar de alta un usuario

Con login:

● Traer datos de perfil de usuario

● Modificar datos de perfil de usuario

● Generar un nuevo pedido

● Modificar datos de un pedido

● Listar todos los pedidos de un usuario


Con login y que sean administradores: 

● Listar todos los pedidos hechos en la aplicación (sólo puede realizarlo el admin)

● Borrar un usuario (sólo puede realizarlo el admin)
