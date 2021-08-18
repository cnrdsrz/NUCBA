
function enviarFormulario(event){

    event.preventDefault()

    let nombre= document.getElementById("nombre")
    let apellido= document.getElementById("apellido")
    let edad= document.getElementById("edad")
    let email= document.getElementById("email")
    let terms= document.getElementById("terms")
    let mensajesError = []

    
    if(nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa Nombre completo')
    }
    if(apellido.value === null || apellido.value === '') {
        mensajesError.push('Ingresa Apellido completo')
    }
    if(edad.value === null || edad.value === '') {
        mensajesError.push('Ingresa Edad correcta')
    }
    if(email.value === null || email.value === '') {
        mensajesError.push('Ingresa email válido')
    }
    if(terms === false){
        mensajesError.push('No aceptaste términos y condiciones')
    }
    else{
        window.alert(`Enviando datos...\nnombre: ${nombre.value}\napellido: ${apellido.value}\nedad: ${edad.value}\nEmail: ${email.value}`)
    }
    

}


