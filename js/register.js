var username =document.querySelector("#username")
var email =document.querySelector("#email")
var password =document.querySelector("#password")
var signup =document.querySelector("#but55")

signup.addEventListener("click" ,function(e){
    e.preventDefault()
    if( username.value==="" || email.value===""  || password.value===""){
        alert("please complete the form")
    }else{

       localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
    }
    setTimeout (function(){
        window.location="login.html"
    },1200)

})





// var username =document.querySelector("#username")
// var email =document.querySelector("email")
// var password =document.querySelector("#password")
// var signup =document.querySelector("#but55")
// signup.addEventListener("click" ,function(e){
//     if(username.value===""){
//         alert("please complete the form")
//     }else{
//         localStorage.setItem("username" , username.value);
//         localStorage.setItem("email" , email.value);
//         localStorage.setItem("password" , password.value);
//         setTimeout ( () => {
//             window.location = "login.html"
//         } , 1000)
//     }
// })
