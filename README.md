Descripción inicial

1. [Ownership](/readme.md#1-ownership)
2. [Operaciones](/readme.md#2-Operaciones)
3. [API Spec](/readme.md#3-api-spec)
4. [Despliegue](/readme.md#4-despliegue)
5. [Colaboración](/readme.md#5-colaboraci%C3%B3n)
6. [Pruebas](/readme.md#5-Pruebas)


## 1. Ownership

Esta sección detalla quién es el responsable del ciclo de vida del microservicio.

### 1.1.    Equipos

Células que desarrollan y mantienen el microservicio.

####    1.1.1.  Célula Empresas

    - Proyecto: Portal Empresas
    - Product Owner: Jorge Pincheira --- Contacto: jpinche2@bancoestado.cl
    - Arquitecto de microsevicios: Daniel Gutierrez --- Contacto: dgutie10@bancoestado.cl

## 2.   Operaciones 

Detalla las operaciones que se pueden explotar a través del microservicio.

| Operacion | Descripción Capacidad | Sistemas involucrados | Responsable |
| ------ | ------ | ------ | ------ |
| gestorContenido | Permite obtener los menu desde el microservicio PerfilApp | MS Drupal | Célula Empresas |

## 3. API Spec
| HTTP | PATH | Parametros| Descripción|
| ------ | ------ | ------ | ------ |
| get | / | Header Authorization | Obtiene el listado de menus parametrizables de la app |
| get | /saldos | Header Authorization | Obtiene los saldos de las cuentas  |
| get | /cuentas/:nroCta/:tipoCta | nroCta tipoCta Header Authorization | Obtiene los ultimos movimientos (cartola) asociados una cuenta  |
----

## 4. Ejecución

Especifica la forma en que se ejecuta la aplicación:

* Instala dependencias:  
 `npm i`

* Ejecución por defecto:  
 `node server.js`

Descripción de variables de entorno:

* PUERTO1: Número de puerto con el que despliega los endpoints con validación de token
* PUERTO2: Número de puerto con el que despliega los endpoints sin validación de token.

## 5. Recursos Utilizados
Detalla los recursos utilizados por una instancia de un contenedor docker.

| Recurso | Requerido |
| ------ | ------ |
| CPU | Detallar cuánto recurso de CPU se debería destinar a una instancia de microsevicio |
| Memoria | Detallar cuánto recurso de Memoria se debería destinar a una instancia de microsevicio |
| Storage | Detallar cuánto almacenamiento se debería reservar para una instancia de microsevicio |

## 6. Colaboración

### 6.1 Estrategia de Colaboración
En el caso de que se desee colaborar en el desarrollo de este artefacto, seguir los siguientes pasos:
* Solicitar acceso developer en gitlab para este repositorio.
* Crear una nueva rama a partir de *Desarrollo-CI*, en la cuál se debe realizar el desarrollo.
* Para integrar el desarrollo realizado, solicitar un *Merge Request* a alguno de los integrantes de la Célula dueña del artefacto.


### 6.2 Caractéristicas del *Merge Request*
Se espera que el Merge Request contenga lo siguiente:
* Estar acotado a una funcionalidad en específico.
* Incluir pruebas unitarias, y de performance en caso de ser requeridas.
* Idealmente incluir screenshots o evidencia del funcionamiento.

#### Dummy Bff ServiEstado

* [Swagger UI](https://desa-plataformadigital.banco.bestado.cl/bff/v1/se-personas-bff/ui/)
* [ServiEstado API Spec](https://desa-plataformadigital.banco.bestado.cl/bff/v1/se-personas-bff/spec/)

