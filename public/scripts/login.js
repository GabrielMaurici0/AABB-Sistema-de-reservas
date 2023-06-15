let iconSenha = document.getElementById('icon-senha');
iconSenha.innerHTML = '<img src="../images/show.png">'

function viewPass() {
    let verSenha = document.getElementById('caixa-texto senha');
    let iconSenha = document.getElementById('icon-senha');
console.log(verSenha)
    if (verSenha.type==='password') {
        verSenha.setAttribute('type','text');
        iconSenha.innerHTML = '<img src="../images/hide.png">'
        console.log("aaa");
    }else{
        verSenha.setAttribute('type','password')
        iconSenha.innerHTML = '<img src="../images/show.png">'
        console.log("bbb");
    }
}