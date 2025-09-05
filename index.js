
document.getElementById("form-validate").addEventListener('submit',function(event){
    event.preventDefault();
let username=document.getElementById("userName").value.trim()
let email=document.getElementById("email").value.trim()
let password=document.getElementById("password").value.trim()
let confirmPassword=document.getElementById("ConfirmPassword").value.trim()

let isvalid=true
let uNamePattern=/^[A-Za-z]+ [A-Za-z]+$/;
let emailPattern=/^[A-Za-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
if(username===""){
    document.getElementById("uName-error").innerText="*Name is required"
    isvalid=false

}
else if(!uNamePattern.test(username)){
    document.getElementById("uName-error").innerText="*FullName is required"
    isvalid=false
}
else if(uNamePattern.test(username)){
    document.getElementById("uName-error").innerText=""
    isvalid=true
}
if(email===""){
    document.getElementById("mail-error").innerText="*email is required"
    isvalid=false
}
else if(!emailPattern.test(email)){
    document.getElementById("mail-error").innerText="*not proper email"
    isvalid=false
}
else if(emailPattern.test(email)){
    document.getElementById("mail-error").innerText=""
    isvalid=true
}
if(password===""){
    document.getElementById("password-error").innerText="*pass is required"
    isvalid=false
}
else if(password.length<3 || password.length>10){
    document.getElementById("password-error").innerText="Enter a pass char  b/w 3 to 10"
    isvalid=false
}
else if(password.length>3 || password.length<10){
    document.getElementById("password-error").innerText=""
    isvalid=true
}
if(confirmPassword===""){
    document.getElementById("Cpassword-error").innerText="*Cpass is required"
    isvalid=false
}
else if(confirmPassword!==password){
    document.getElementById("Cpassword-error").innerText="password not matched"
    isvalid=false

}
else if(confirmPassword===password){
    document.getElementById("Cpassword-error").innerText=""
    isvalid=true
}
    if(isvalid){
        alert('hi ${username},welcome to our website')
    }
})