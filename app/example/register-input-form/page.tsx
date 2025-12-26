import { useRegisterForm } from "./hooks/use-register-form";
"use client";
import { useState, ChangeEvent, use } from "react";

export default function Page() {
    const{username, handleUsernameChange} = useRegisterForm();
    const{email, handleEmailChange} = useRegisterForm();
    const{password, setPassword} = useRegisterForm();
    const{confirmpassword, setconfirmPassword} = useRegisterForm();
    const{ handleSubmit} = useRegisterForm();
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-auto max-w-md border p-4">
                <div className="m-2">
                    <label className="text-white">Username</label>
                    <input type="text" value={username} onChange={handleUsernameChange} 
                        className="w-full border p-2 rounded" />
                </div>
                <div className="m-2">
                    <label className="text-white">Email</label>
                    <input type="text" value={email} onChange={handleEmailChange} 
                        className="w-full border p-2 rounded" />
                </div>
                <div className="m-2">
                    <label className="text-white">Password</label>
                    <input type="password" value={password} 
                        onChange={ (e) => setPassword(e.target.value) }  // inline handler
                        className="w-full border p-2 rounded" />
                </div>
                <div className="m-2">
                    <label className="text-white">Confirm Password</label>
                    <input type="password" value={confirmpassword} 
                        onChange={ (e) => setconfirmPassword(e.target.value) }  // inline handler
                        className="w-full border p-2 rounded" />
                </div>
                <button type="submit" className="m-2 w-full bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}