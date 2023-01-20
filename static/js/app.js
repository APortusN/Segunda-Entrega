alert("¡Bienvenido al servicio de registro climático! \nTu colaboración nos ayuda a mejorar nuestro archivo metereológico")


class registroClima {
    constructor(ciudad, dia, mes, tempMax, tempMin){
        this.ciudad = ciudad;
        this.dia = dia;
        this.mes = mes;
        this.tempMax = parseFloat(tempMax);
        this.tempMin = parseFloat(tempMin);
    }
}

const arrayRegistroClima = []     // Array

function registro(){
do{
    var verificar = prompt ("Ingrese nombre la ciudad o escribir - salir - para finalizar de agregar")
    if ( verificar === "salir" || verificar === "SALIR" || verificar === "Salir" ){
        break
    }
    else{
        ciudadArray = verificar
        diaArray = prompt ("Ingrese el día (ej. lunes, martes…)")
        mesArray = prompt ("Ingrese el mes (ej. enero, febrero...)")
        tempMaxArray = prompt ("Ingrese la temperatura máxima registrada")
        tempMinArray = prompt ("Ingrese la temperatura mínima registrada")
        arrayRegistroClima.push(new registroClima( ciudadArray, diaArray, mesArray, tempMaxArray, tempMinArray))
        
    }
}
while ( verificar != "salir" || verificar != "SALIR" || verificar != "Salir" )

console.log(arrayRegistroClima)
}


function menu(){
let entrada = prompt("Seleccionar que desea hacer con sus registros \n  1. ¿cuántos registros he ingresado?  \n  2. Ingresar nuevo registro \n  3. Eliminar último registro  \n  4. Ver todos registros en consola \n  5. Ver todas las ciudades con registro \n  6. Salir ")
entrada = parseInt(entrada)
do{
    switch(entrada){
        case 1 : alert("Usted ha ingresado  " + arrayRegistroClima.length + "  registros")
                menu()
                break
        case 2 : registro()
                menu()
                break
        case 3 : eliminarUltimoregistro(arrayRegistroClima)
                menu()
                break
        case 4 : verTodosRegistros(arrayRegistroClima)
                menu()
                break
        case 5 : verCiudadesRegistradas(arrayRegistroClima)
                menu()
                break
        case 6 : alert ("Saliendo")
                break
        default: alert("Opción invalida")
                menu()
    }
}while (entrada != 6)
}

function eliminarUltimoregistro(arrayRegistroClima){
    let eliminar = prompt("¿Desea eliminar el último registro? \n  Para continuar escribir - si - \n  De lo contrario, presionar cualquier letra para volver al menú");
    if (eliminar == "si"|| eliminar === "SI" || eliminar === "Si") {
        arrayRegistroClima.pop()
        alert("¡ha eliminado exitosamente su último registro!")
    }
    else{
        menu()
    }
}

function verTodosRegistros(arrayRegistroClima){    
    arrayRegistroClima.forEach((num)=>{console.log(num)})
    alert("Todos los registros: Sus registros se imprimirán en consola")
    
}

function verCiudadesRegistradas(arrayRegistroClima){
    const ciudades = arrayRegistroClima.map((el=> el.ciudad))
    console.log(ciudades)
    alert("Ciudades registradas: sus registros se imprimirán en consola")
    
}

registro()

menu()