let iconSenha = document.getElementById('icon-senha');
iconeSenha.innerHTML = '<img src="../images/show.png">'

function viewPass() {
    let verSenha = document.getElementById('senha');
    let iconSenha = document.getElementById('icon-senha');

    if (verSenha.type==='password') {
        verSenha.setAttribute('type','text');
        iconSenha.innerHTML = '<img src="../images/hide.png">'
    }else{
        verSenha.setAttribute('type','password')
        iconSenha.innerHTML = '<img src="../images/show.png">'
    }
}