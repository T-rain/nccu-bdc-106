function login(){
    var input_user = document.querySelector("#in_user").value;
    var input_password = document.querySelector("#in_pass").value;
    document.cookie = 'username='+input_user;
    document.cookie = 'password='+input_password;

    document.querySelector(".login_page").style=""
    document.querySelector(".unlogin_page").style="display:none"
    document.querySelector("#pg").innerHTML="HI!! "+input_user;
}

function logout(){
    document.querySelector("#pg").innerHTML="";
    document.querySelector(".login_page").style="display:none"
    document.querySelector(".unlogin_page").style=""
}

function hi(){
    var input_age = document.querySelector("#in_age").value;
    document.querySelector("#pg").innerHTML="OH!! your age is "+input_age;
}
