function enviar(){
    let name=document.getElementById(`name`).value
    let last=document.getElementById(`last`).value
    let email=document.getElementById(`email`).value
    let phone=document.getElementById(`phone`).value
    let mensaje=document.getElementById(`mensaje`).value
    
    //Regulador de caracteres
    let vali_nombre=/^[a-zA-ZÀ-ÿ\s]{4,16}$/ //Username

    let vali_correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ //email
    let vali_celular= /^[9|6|7][0-9]{8}$/ // celular

    if(name==""){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_nombre").style.color = "#da2f2f";
        document.getElementById("error_nombre").innerHTML=`Campos Obligatorios`
    }
    else if(!vali_nombre.test(name)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_nombre").style.color = "#da2f2f";
        document.getElementById("error_nombre").innerHTML=`Debes agregar caracteres normales`
    }

    //Comprobar last name

    if(last==""){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_last").style.color = "#da2f2f";
        document.getElementById("error_last").innerHTML=`Campos Obligatorios`
    }
    else if(!vali_nombre.test(last)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_last").style.color = "#da2f2f";
        document.getElementById("error_last").innerHTML=`Debes agregar caracteres normales`
    }

    //Comprobar Email

    if(email==""){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_email").style.color = "#da2f2f";
        document.getElementById("error_email").innerHTML=`Campos Obligatorios`
    }
    else if(!vali_correo.test(email)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_email").style.color = "#da2f2f";
        document.getElementById("error_email").innerHTML=`Debes agregar caracteres con @gmail.com`
    }

    //Comprobar PHONE

    if(phone==""){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_phone").style.color = "#da2f2f";
        document.getElementById("error_phone").innerHTML=`Campos Obligatorios`
    }
    else if(!vali_celular.test(phone)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_phone").style.color = "#da2f2f";
        document.getElementById("error_phone").innerHTML=`Debes empezar con "9" y solo agrega 9 digitos`
    }

    //Comprobar Mensaje

    if(mensaje==""){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_mensaje").style.color = "#da2f2f";
        document.getElementById("error_mensaje").innerHTML=`Campos Obligatorios`
    }
    else if(!vali_nombre.test(mensaje)){
        let form=document.getElementById(`form`)
        form.addEventListener("submit", function(event){
            event.preventDefault()
        })
        document.getElementById("error_mensaje").style.color = "#da2f2f";
        document.getElementById("error_mensaje").innerHTML=`Debes agregar caracteres normales`
    }

}