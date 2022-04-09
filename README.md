# Challenge TAP *Buscaminas API*

*Consigna basada en la implementación de una api rest que formara parte del back-end para un buscaminas.*

### Configuracion para poder levantar el proyecto

1) Ejecutar el script que se encuentra en la carpeta script dentro de src.
2) Iniciar el programa XAMPP
3) Instalar las dependencias del proyecto con : 
``` bash 
npm install 
```

### Iniciar el Servidor con el comando :

``` bash
npm start
```

# Rutas

### GET

*Recibe como parametro un ID, si se pasa como parametro en la ruta recupera el ID del juego desde un almacenamiento, <br>
si no esta informado se crea una nueva.<br>
`/games` => Crea una nueva partida<br>
`/games/id` => Busca una partida por el id pasado por ruta*
<br>


### POST

*Guarda una partida ya iniciada y recibe la partida en curso<br>
`/games` => Recibe por el body :<br> 
"id", Del juego del que se quiere actualizar<br>
"game_state_id", Que actualiza el estado de la partida, segun lo valores 1 , 2 o 3 que representan 1-CREATED , 2-WON , 3-LOST*

<br>
Documentacion de los endpoints: https://www.getpostman.com/collections/c86ac2527f1fa9313c0a
<br>
<br>

## Test de rutas
### Iniciar con el comando :

``` bash
npm test
```
<br>

## En el archivo DAILY.MD se guarda mas información sobre el challenge.

