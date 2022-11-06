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

- Para crear las tablas: entrar en el archivo index.js y en la línea 21 cambiar el ```db.authenticate()``` por:

```sequelize.sync({force: true})```

- Arrancamos el servidor con ```npm run dev ``` y se migraran todas las tablas a la ddbb.
- Una vez migradas, 'CTRL+C' para dejar de estar con el servidor arrancado.
- Volvemos al index.js y ```sequelize.sync({force: true})``` lo cambiamos por:
```db.authenticate()```
- Para crear los registros: 
```sequelize db:seed:all```


