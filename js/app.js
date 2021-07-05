function validar(){

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

if(email === "" || nombre === "" || pass === ""){
    alert("complete todos los campos");
    return false  
} else

    if(nombre.value.length <6){
        warnings+= 'el nombre no es valido <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El correo no es valido <br>'
        entrar = true
    }
    if(pass.value.length <8){
        warnings += 'la contraseña no es valida <br>'
        entrar = true
    } 
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "enviado"
    }

}