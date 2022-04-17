API PULPU CHALLENGE

INSTALACION
    para instalar los paquetes necesarios para su ejecucion se requiere tener previamente instalado NodeJS en su version 10.24.0 o superior
    teniendo ello accediendo via consola a la carpeta del sistema se ejecuta el comando "npm install"
    
EJECUCION DEL SISTEMA 

    para le ejecucion del sistema estando en la carpeta raiz del proyecto 
    en la consola de comandos NodeJS se debe ejecutar el comando "node app"
    esto iniciara el sistema en el puerto 3000 por defecto

CONFIGURACION DEL SISTEMA
    
    las configuraciones basicas del sistma se pueden localizar  en ./config/config.json
    esto incluye configuraciones de: Puerto de ejecucion, KEY de subscripcion, entorno

    el entorno por defecto es "local" en dado caso que el entorno de ejecucion no lo tenga
    establecido

PRUEBAS DE SISTEMA
    estos archivos se encuentran en la carpeta "tests"
    estas pruebas son ejecutadas con el comando "npm run test"
    estas pruebas son hechas con ayuda de la libreria "jest"

DOCUMENTACION
    el sistema una ves ha sido ejecutado debera correr en el puerto 3000
    adicional a esto con ayuda de las librerias "swagger" puedes acceder 
    una pagina para apreciar la DOCUMENTACION de uso de el mismo sistema
    en el vinculo http://localhost:3000/api-doc/ o en caso de ser 
    modificado http://tuHost/api-doc/

