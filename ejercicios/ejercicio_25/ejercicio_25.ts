/* Enunciado Ejercicio 25:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']
  */

function renombrarArchivos( files: string[] ): string[]{
    const numberOfFiles:Record<string, number> = {}
    const splitArray = files.map( file => {

        if ( !numberOfFiles[file] ){
            numberOfFiles[file] = 1
            return file
        }
        return file.split('.')
                   .join(`(${numberOfFiles[file]++}).`)
        // return file.replace(/(\.\w+)$/, `(${numberOfFiles[file]++})$1`) // ? POR ESTO DEBO APRENDER LAS EXPRESIONES REGULARES...

    });
    
    return splitArray;
}

console.log(renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]))
