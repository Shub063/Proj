import React from "react";
//import $ from 'jquery';

function RegisterYourSelf(){

    // <style>
    //     .text{
    //         {"font-size": "1px"}
    //     }
    //     #form.invalid .inputBox:before
    //     {
    //         {"content": "","background":"url(invalid.png)"}
    //     }
    //     #form.valid .inputBox:before
    //     {
    //         {"content": "","background":"url(valid.png)"}
    //     }
    // </style>

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     var temp = {
    //         first_name: e.target.first.value,
    //         last_name: e.target.last.value,
    //         email: e.target.email.value,
    //         password: e.target.password.value,
    //         cpassword: e.target.cpassword.value
    //     };
    //     console.log(temp);
    // }
    
    //     function emailValidation(){
            
    //         var regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //         var form = document.getElementById("form");
    //         var email = $("#email").val();
    //         var text = document.getElementsByClassName("emailWarn");
    //         if(email.match(regEmail))
    //         {
    //            form.classList.add("valid");
    //            form.classList.remove("invalid");
    //            text.innerHTML = "Email address is valid";
    //            text.style.color = "00ff00";
    //         }
    //         else
    //         {
    //             // $(".emailWarn").html("Enter a valid email")
    //             // //alert("Please enter a valid email");
    //             // return false;
    //            form.classList.add("invalid");
    //            form.classList.remove("valid");
    //            text.innerHTML = "Please enter a valid email address!"
    //            text.style.color = "#ff0000";
               
    //         }

    //         if(email === "")
    //         {
    //            form.classList.remove("valid");
    //            form.classList.remove("invalid");
    //            text.innerHTML = ""
    //         }
            
    //     }

    //     function passwordValidation(){
    //         var form = document.getElementById("form");
    //         var password = $("#password").val();
    //         var regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    //         var text = document.getElementsByClassName("passWarn");
    //         if(password.match(regPass))
    //         {
    //             // return true;
    //            form.classList.add("valid");
    //            form.classList.remove("invalid");
    //            text.innerHTML = ""
    //            text.style.color = "00ff00";
    //         }
    //         else{
    //             //$(".passWarn").html("Password between 7 to 15 characters which must contain at least one numeric digit and a special character")
    //             //alert("Password between 7 to 15 characters which must contain at least one numeric digit and a special character")
    //             //return false;
    //            form.classList.add("invalid");
    //            form.classList.remove("valid");
    //            text.innerHTML = "Password between 7 to 15 characters which must contain at least one numeric digit and a special character!"
    //            text.style.color = "#ff0000";
    //         }
    //         if(password === "")
    //         {
    //            form.classList.remove("valid");
    //            form.classList.remove("invalid");
    //            text.innerHTML = ""
    //         }
            
    //     }

    //     function cpasswordValidation(){
    //         var form = document.getElementById("form");
    //         var cpassword = $("#cpassword").val();
    //         var password = $("#password").val();
    //         var text = document.getElementsByClassName("cpassWarn");
    //         if(cpassword === password)
    //         {
    //             // return true;
    //             form.classList.add("valid");
    //             form.classList.remove("invalid");
    //             text.innerHTML = "Password Matched!"
    //             text.style.color = "00ff00";
    //         }
    //         else{
    //             //alert("Password does not match the original, please enter again")
    //             // $(".cpassWarn").html("Password does not match")
    //             // return false;
    //             form.classList.add("invalid");
    //             form.classList.remove("valid");
    //             text.innerHTML = "Password does not match!"
    //             text.style.color = "#ff0000";
    //         }
    //         if(cpassword === "")
    //         {
    //            form.classList.remove("valid");
    //            form.classList.remove("invalid");
    //            text.innerHTML = ""
    //         }
    //     }


    return(
        <>
         <div className="container-fluid">
            <div className="row justify-content-end align-items-center" style={{height : "92vh"}}>
                <div className="col-6 me-4 border inputBox">
                    <form id= "form" onSubmit={handleSubmit}>
                        <div class="mb-2">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" name="first" class="form-control" id="firstName" required/>
                        </div>
                        <div class="mb-2">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" name="last"  class="form-control" id="lastName"/>
                        </div>
                        <div class="mb-2">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" name="email" class="form-control" id="email" onKeyDown={emailValidation()} required/>
                            <span class = "emailWarn text"></span>
                        </div>
                        <div class="mb-2">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" name="password" class="form-control" id="password" onKeyDown={passwordValidation()} required/>
                            <span class = "passWarn text"></span>
                        </div>
                        <div class="mb-2">
                            <label for="cpassword" class="form-label">Confirm Password</label> 
                            <input type="password" name="cpassword" class="form-control" id="cpassword" onKeyDown={cpasswordValidation()} required/>
                            <span class = "cpassWarn text"></span>
                        </div>
                        {/* <div class="mb-2">
                            <
                        </div> */}
                        <div class="mb-2">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
        </>
    );
}
export default Register;