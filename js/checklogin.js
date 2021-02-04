if (localStorage.getItem("login"))
{if (localStorage.getItem("login")=="admin") 
{
    document.getElementById("admin").classList.add("show")
document.getElementById("logout").classList.add("show")
    
} else {
   
document.getElementById("logout").classList.add("show")
    
}


}