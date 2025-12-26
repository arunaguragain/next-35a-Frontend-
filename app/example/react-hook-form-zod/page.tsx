"use client";
import { useForm } from "react-hook-form";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginType } from "./schema";


// import static assests from "app" folder
import image from "@/app/assets/images/image.png";

// import nextjs Image tag, auto optimize
import Image from "next/image";

// export const loginSchema = z.object({
//     email: z.email( { message: "Email milena" } ).min( 5,  "Email pugena" ),
//     password: z.string().min( 8, "Password pugena" )
// }); // error message can be in { "message": ".." } or as 2nd param "..."
// export type LoginType = z.infer<typeof loginSchema>;

export default function Page() {
    const {
        register, // bind input to input state
        handleSubmit, // handle form submit logic, validation
        formState: { errors , isSubmitting }, // form state, like validation errors
    } = useForm<LoginType>(
        {
            resolver: zodResolver( loginSchema ),
            values: { email: "abc", password: "xyz" } // input state and initial
        }
    );
    const onSubmit = async (data: LoginType) => { // data: input states from useForm
        alert(data.email)
    }
    return (
        <div>
            {/* Asset, height, width optional */}
            <Image src={image} alt="Image" height={200} width={200}/>
            {/* Public, height, width required, omit "public" folder path*/}
            <Image src="/images/photo.jpeg" alt="photo" height={200} width={200}/>

            <form onSubmit={ handleSubmit(onSubmit) } 
                className="mx-auto max-w-md p-4 border rounded">

                <div className="m-2">
                    <label>Email</label>
                    <input { ...register( "email" ) }
                        className="p-2 border" />
                    {
                        errors.email && // conditional rendering, if errors.email exists 
                        <p className="text-red-500">{ errors.email.message }</p>
                    }
                </div>
                <div className="m-2">
                    <label>Password</label>
                    <input { ...register( "password" ) }
                        className="p-2 border" />
                    {
                        errors.password && // conditional rendering, if errors.password exists 
                        <p className="text-red-500">{ errors.password.message }</p>
                    }
                </div>
                <button type="submit" className="bg-green-500 p-2 text-white rounded">
                    Submit
                </button>      
                    
            </form>
        </div>
    );
}