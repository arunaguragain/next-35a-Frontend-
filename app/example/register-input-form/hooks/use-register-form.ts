// import { useState, ChangeEvent } from "react";
"use client";
import { useState, ChangeEvent, use } from "react";

//Custom hook for login from state management
//Group of stateful logic in a function 
//"use" prefix is mandatory
export function useRegisterForm(){
    const [ username, setUsername] = useState("");
    const [ email, setemail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmpassword, setconfirmPassword] = useState("");

    // Hanlder function
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setemail(e.target.value);
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleconfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setconfirmPassword(e.target.value);
    }
    const handleSubmit = () => {
        const data = {
            username, password
        } // further logic like API call
        alert(`Username: ${username}, Email : ${email}, Password: ${password}, ConfirmPassword: ${confirmpassword}`);
    }
    return {
        username,email, password,confirmpassword, //states/variable
        setUsername,setemail, setPassword, setconfirmPassword, //state update functions
        handleUsernameChange, handleEmailChange, handlePasswordChange, handleconfirmPasswordChange, handleSubmit //handler functions
    }
    // return only what is needed outside the hook
}