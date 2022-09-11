import React, { useState, useEffect } from "react";
import axios from 'axios';
//import $ from 'jquery';
function Register()
{

    const initialValues = { firstName: "", lastName: "", email: "", password: "", cpassword: "", userRole: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);//used as a flag
    // const [check, setCheck] = useState("");
    
    // const handleCheckbox = (e) => {
    //     //console.log(e.target);
    //     const {value, checked} = e.target;
    //     //below code for checkbox
    //     // if(checked){// value will be stored only when it is checked
    //     //     setCheck([...check, value]);
    //     // }else{// if the uncheck the checkbox the value will be removed
    //     //     setCheck(check.filter((e) => e !== value))
    //     // }
    //     //for radio
    //     setCheck({...check,value});
    //     console.log(check);
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);// when submitted it turns true
    };

    useEffect(() => { // it is used to check if all the input fields are validated properly
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){// check if error length and isSubmit is true than we can submit our form
            // Object of formError
            console.log(formValues);
           // console.log(check);

            //const data = {objects: [formValues, check]};
            axios.post('http://localhost:8080/users/registration', formValues)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },[formErrors]);

    const validate = (values) => {// values will fetch the formValues
        const errors = {};
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
          if (!emailRegex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!passwordRegex.test(values.password)) {
            errors.password = "Password should be between 7 to 15 characters which must contain at least one numeric digit and a special character";
          }
          if(values.password !== values.cpassword){
            errors.cpassword = "Password does not match the original"
          }
          return errors;
    };

    return(
        <div className="container-fluid">
            <div className="row justify-content-end align-items-center" style={{height : "94vh"}}>
                <div className="col-6 me-4">
                {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}{/*to show the live input */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="form-label">First Name</label>
                            <input type="text" name="firstName" className="form-control" value= {formValues.firstName} onChange={handleChange} required/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Last Name</label>
                            <input type="text" name="lastName"  className="form-control" value= {formValues.lastName} onChange={handleChange}/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" value= {formValues.email} onChange={handleChange} required/>
                        </div>
                        <h6 style={{ color: "red" }}>{formErrors.email}</h6>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password" value= {formValues.password} onChange={handleChange} required/>
                        </div>
                        <span style={{ color: "red" }}>{formErrors.password}</span>
                        <div className="mb-2">
                            <label className="form-label">Confirm Password</label> 
                            <input type="password" name="cpassword" className="form-control" id="cpassword" value= {formValues.cpassword} onChange={handleChange} required/>
                        </div>
                        <span style={{ color: "red" }}>{formErrors.cpassword}</span>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userRole" value="ROLE_ADMIN" onChange={handleChange} checked={formValues.userRole === 'ROLE_ADMIN'} />
                            <label className="form-check-label">
                                Admin
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userRole" value="ROLE_AUTHOR" onChange={handleChange} checked={formValues.userRole === 'ROLE_AUTHOR'}/>
                            <label className="form-check-label">
                                Author
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userRole" value="ROLE_USER" onChange={handleChange} checked={formValues.userRole === 'ROLE_USER'}/>
                            <label className="form-check-label">
                                User
                            </label>
                        </div>
                        <div className="mb-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;