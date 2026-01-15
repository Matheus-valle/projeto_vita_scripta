function login() {
    var email = input_email.value
    var senha = input_senha.value

    if (email == "" || email == undefined || senha == "" || senha == undefined) {
        console.log("input sem nada!!!!")
        div_erro.innerHTML = `<b style="color: red;">Inputs Vazios!</b>`
    } else {
        console.log("passou")
        div_erro.innerHTML = `` 

        if(email == "matheus@gmail.com" && senha == "12345678") {
        window.location = "../pages/pages_usuario/tela_post.html"; 
    } else {
         div_erro.innerHTML = `<b style="color: red;">Senha Invalida!</b>`
    } 
    }
    
}

function registro() {
    var nome = input_nome.value 
    var email = input_email.value 
    var senha = input_senha.value 
    var conf_senha = input_confirmar_senha.value

    if (nome == "" || email == "" || senha == "" || conf_senha == "") {
        div_erro.innerHTML = `<b style="color: red;">Inputs Vazios!</b><br>` 
    }

    if (nome.length > 45) {
         div_erro.innerHTML += `<b style="color: red;">Nome muito longo!</b><br>` 
    }

    if (email.includes('@') == false || email.includes('.com') == false) {
         div_erro.innerHTML += `<b style="color: red;">Email incorreto!</b><br>`
    }

    if (senha.length < 8) {
         div_erro.innerHTML += `<b style="color: red;">Senha menor que 8 caracteres!</b><br>`
    }

    if (senha != conf_senha) {
         div_erro.innerHTML += `<b style="color: red;">Senhas não sao iguais!</b><br>`
    }

   
}