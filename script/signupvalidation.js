let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");


let createButton = document.getElementById("createButton");
let checkBox = document.getElementById("checkBox");

// for displaying error
let wfname = document.getElementById("wfname"); // for showing error if invalid name
let wlname = document.getElementById("wlname");
let wemail = document.getElementById("wemail");
let wphone = document.getElementById("wphone");
let wpass1 = document.getElementById("wpass1");
let wpass2 = document.getElementById("wpass2");
let optionPassword = document.getElementById("optionPassword"); //passsword requirements div
optionPassword.style.display = "none";





//for disabling button
let completed = document.getElementById("completed");
let buttonDiv = document.getElementById("buttonDiv");
var a
var b
var c
var d
var e
var f

//createButton.disabled = true;







firstName.onblur = function fnameValidate(){
    if(/^[a-zA-Z ]+$/.test(firstName.value) == false){
        firstName.classList.add('error');
        wfname.classList.add('wronginput');
        wfname.innerHTML = "Please enter a valid name";
        
        //createButton.disabled = true;
        
    }
    else{
        //createButton.disabled = false;
        a = 0;
        
    }
}


firstName.onfocus = function(){
     if(firstName.classList.contains('error')){
        firstName.classList.remove('error');
        

     };
     if(wfname.classList.contains('wronginput')){
        wfname.classList.remove('wronginput');
        wfname.innerHTML ="Enter your first name";
     }
}

lastName.onblur = function lastNameValidate(){
    if(/^[a-zA-Z ]+$/.test(lastName.value) == false){
        lastName.classList.add('error');
        wlname.classList.add('wronginput');
        wlname.innerHTML = "Please enter a valid name";
        
        //createButton.disabled = true;
    }
    else{
        //createButton.disabled = false;
        b = 0;
        
    }
}

lastName.onfocus = function(){
    if(lastName.classList.contains('error')){
        lastName.classList.remove('error');
    };
    if(wlname.classList.contains('wronginput')){
        wlname.classList.remove('wronginput');
        wlname.innerHTML ="Enter your last name";
     }
}

email.onblur = function(){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){
        email.classList.add('error');
        wemail.classList.add('wronginput')
        wemail.innerHTML = "Enter a valid email address";
        //createButton.disabled = true;
    }
    else{
        //createButton.disabled = false;
        c = 0;
    }


}

email.onfocus = function(){
    if(email.classList.contains('error')){
        email.classList.remove('error');
    }
    if(wemail.classList.contains('wronginput')){
        wemail.classList.remove('wronginput');
        wemail.innerHTML ="Enter your E-mail address";
     }
}

phone.onblur = function(){
    if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone.value) == false){
        phone.classList.add('error');
        wphone.classList.add('wronginput')
        wphone.innerHTML = "Enter a valid Phone number";
        //createButton.disabled = true;

    }
    
    else{
        //createButton.disabled = false;
        d = 0;
    }
}

phone.onfocus = function(){
    if (phone.classList.contains('error')){
        phone.classList.remove('error');
    }
    if(wphone.classList.contains('wronginput')){
        wphone.classList.remove('wronginput');
        wphone.innerHTML ="Enter your Phone number";
     }

}

password1.onblur = function (){
    if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password1.value)== false){
        password1.classList.add('error');
        wpass1.classList.add('wronginput')
        wpass1.innerHTML = "Enter a strong Password";
        optionPassword.style.display = "block";

        //createButton.disabled = true;

    }
    else{
        //createButton.disabled = false;
        e = 0;
    }
}


password1.onfocus = function(){
     if(password1.classList.contains('error')){
        password1.classList.remove('error');
        optionPassword.style.display = "none";


        //createButton.disabled = true;

    }
    if(wpass1.classList.contains('wronginput')){
        wpass1.classList.remove('wronginput');
        wpass1.innerHTML ="Create a password";
     }

}

password2.onblur = function(){
    if(password1.value != password2.value){
        password2.classList.add('error');
        wpass2.classList.add('wronginput')
        wpass2.innerHTML = "Passwords mismatch";
        //createButton.disabled = true;

    }
    else{
        f = 0;
        //createButton.disabled = false;
    }
}

password2.onfocus = function(){
     if(password2.classList.contains('error')){
        password2.classList.remove('error');
     }
     if(wpass2.classList.contains('wronginput')){
        wpass2.classList.remove('wronginput');
        wpass2.innerHTML ="Confirm your password";
     }
}

 buttonDiv.onmouseover = function(){
     if(a!=0 || b!=0 || c !=0 || d !=0 || e!=0 || f!=0 || checkBox.checked == false) {

         createButton.disabled = true;
         completed.innerHTML = "Please fill all the fields then agree the terms and conditions! ";
         return false
        


     }

 }
 buttonDiv.onmouseleave = function(){

     createButton.disabled = false;
     completed.innerHTML = "";




 }

// buttonDiv.onmouseover = function(){
//     if(fnameValidate()||lastNameValidate()){

//         completed.innerHTML = "ok";

        

//     }
// }












