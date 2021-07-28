const datos = (nombre, apellido, edad) => {
  if(typeof nombre !== "string" || typeof apellido !== "string" || typeof edad !== "number"){
    console.log("datos invalidos")
  }
  else if(typeof nombre !== "string" || typeof apellido !== "string" || typeof edad === "number") {
    console.log("datos incorrectos salvo edad")
  }
  else if(typeof nombre !== "string" || typeof apellido === "string" || typeof edad === "number") {
    console.log("nombre incorrecto")
  }
  
  else if(edad>18) {
    console.log("eres mayor de edad");
  }
  
  else if(edad<18) {
    console.log("eres menor de edad");
  }
  
  else if(edad>60) {
    console.log("eres mayor y estas en tercera edad");
  }
    
}

datos("Conrado","suarez",32)