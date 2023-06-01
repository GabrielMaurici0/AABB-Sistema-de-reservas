function redirecionar() {
    window.location.href(app.render("login.ejs"))
}

var login = document.getElementById("login");

login.addEventListener("onclick", redirecionar())