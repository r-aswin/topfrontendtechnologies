let userId = document.getElementById("userId");
let password = document.getElementById("inputPassword");

let buttonDiv = document.getElementById("buttonDiv");
let buttonSignin = document.getElementById("buttonSignin");

let checkingBox = document.getElementById("checkingBox");

var y;
var z;

userId.onblur = function(){
    if(userId.value.length < 4){

        userId.classList.add('error');
        errorId.innerHTML = "Invalid User ID (User ID contain atleast 4 characters)";

    }
    else{
        y = 0;
    }
}
userId.onfocus = function (){

    if(userId.classList.contains('error')){
        userId.classList.remove('error');
        errorId.innerHTML ="";
    }
}

inputPassword.onblur = function (){
    if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(inputPassword.value)== false){
        inputPassword.classList.add('error');
        wrongPassword.innerHTML = "Invalid Password!";
        //createButton.disabled = true;


    }
    else{
        //createButton.disabled = false;
        z = 0;
    }
}

inputPassword.onfocus = function(){
    if(inputPassword.classList.contains('error')){
        inputPassword.classList.remove('error');
        wrongPassword.innerHTML ="";
    }
}

buttonDiv.onmouseover = function(){

    if(y != 0 || z != 0 || checkingBox.checked == false){

        buttonSignin.disabled = true;
        errorMsg.innerHTML = "Please enter User ID & Password then check the check box!"

    }

}

buttonDiv.onmouseleave = function(){

    buttonSignin.disabled = false;
    errorMsg.innerHTML = "";



}
