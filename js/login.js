function Login()
{
var login=document.getElementById("login").value
var password=document.getElementById("password").value
if (login=="admin" && password=="admin") 
{
localStorage.setItem("login","admin")
document.getElementById("admin").classList.add("show")
document.getElementById("logout").classList.add("show")
    
} else { if (password.length>=5)
    {localStorage.setItem("login","true")
    document.getElementById("error").innerHTML="Вы авторизировались"
    var url=document.location.toString().replace("login","index")
    console.log(url)
    setTimeout(()=>document.location.replace(url), 2000)
    

}
else
{
    console.log(document.getElementById("error"))
    document.getElementById("error").innerHTML="Длинна пароля должна быль больше 5 символов"
}
    
}

}
function logout()
{
localStorage.setItem("login","false")    
document.getElementById("admin").classList.remove("show")
document.getElementById("logout").classList.remove("show")
}