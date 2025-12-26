import { useState, ChangeEvent } from "react";

//Custom hook for login from state management
//Group of stateful logic in a function 
//"use" prefix is mandatory
export function useLoginForm(){
    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    // Hanlder function
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handleSubmit = () => {
        const data = {
            username, password
        } // further logic like API call
        alert(`Username: ${username}, Password: ${password}`);
    }
    return {
        username, password, //states/variable
        setUsername, setPassword, //state update functions
        handleUsernameChange, handleSubmit //handler functions
    }
    // return only what is needed outside the hook
}