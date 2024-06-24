# Para ejecutar el aplicativo, disponemos de 3 opciones:
Para las dos primeras opciones, será necesario descargar `Docker Desktop` y tenerlo arrancado, al igual que disponer de una cuenta en `Docker Hub` (totalmente gratuita).

## Primera opción:
- Descargamos la aplicación, sin necesidad de descargar el directorio `compose pull`.
- Tras esto, sobre el directorio principal del proyecto (donde se ubica el archivo `docker-compose.yml`), ejecutar el siguiente comando en el terminal (si es la primera vez que se levanta este proyecto): `docker-compose up --build`. Para próximos casos en los que se desee levantar los contenedores que contienen el aplicativo, ejecutar: `docker-compose up`
`Nota`: En mi PC, al ejecutar el comando `docker-compose up --build`, al ser la primera vez, tarda más en crear la base de datos que en realizar las migraciones de django, por lo que me genera un error. Si esto pasa, parar los contenedores con `Ctrl + C` en la ventana del terminal donde aparecen los logs (o utilizar el comando `docker stop nombre_del_contenedor`, siendo 3 contenedores los que se crean) y volver a levantarlos con `docker-compose up`.

## Segunda opción:
Si solo queremos ver el uso del aplicativo, sin interesarnos por el código del proyecto, tan solo descargar el directorio `compose pull`, y sobre éste, de nuevo en el terminal, escribir las siguientes sentencias:
- `docker-compose pull`
- `docker-compose up`
Con esto, ya funcionará toda la aplicación sin necesidad de descargar todo el proyecto, solo con el archivo `docker-compose.yml`.

## Tercera opción:
Si no queremos instalar Docker Desktop, para que funcione en local:
- Revisar el archivo `settings.py` del directorio `champions` dentro de `backend`, en la sección donde aparece los parámetros de `DATABASES`, y configurar de acuerdo al usuario y contraseña que desee, además de crear la base de datos en MySQL con los mismos credenciales.
- En la misma sección del archivo `settings.py`, cambiar el valor de `HOST` de `'db'` a `'localhost'`.

Para disponer de todos los datos, hay varias opciones:
- En el directorio insert_data, cambiar también el valor de `HOST_NAME` de `'db'` a `'localhost'` y configurar la ruta hacia los CSV en función del directorio desde el que se ataque el intérprete. Una vez hecho esto, ejecutar cada uno de los archivos insert_data.
- La otra opción sería volcar el archivo dump.sql sobre la base de datos local MySQL. Para ello, ejecutar el comando `mysql -p championsleague < dump.sql`, ó `mysql -h localhost -p championsleague < dump.sql`, sobre el directorio `mysqldata` de `backend`, que es donde se encuentra el archivo (si el ejecutable de mysql está dentro de las variables de entorno y lo podemos ejecutar desde cualquier directorio, en caso contrario, mover el archivo dump.sql al directorio donde tengamos el ejecutable y, tras realizar el volcado, eliminarlo de ese directorio, ya que no nos interesa que se quede ahí).


