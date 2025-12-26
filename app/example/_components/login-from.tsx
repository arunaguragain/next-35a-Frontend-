import Link from "next/link";
export default function LoginForm() {
    return (
        <div className="mx-auto max-w-md p-4 border rounded">
            <div className="m-2">
                <label className="text-white">Username</label>
                <input type="text" className="w-full border p-2 border rounded" />
            </div>

            <div className="m-2">
                <label className="text-white">Password</label>
                <input type="password" className="w-full border p-2 border rounded" />
            </div>

            <button className="m-2 w-full bg-blue-500 text-white p-2 rounded">
                Login
            </button>

            <div className="m-2 text-center">
                Don't have an account?
                <Link href="/example/register" className="text-blue-500 underline">Register</Link>
            </div>
            
        </div>
    );
}