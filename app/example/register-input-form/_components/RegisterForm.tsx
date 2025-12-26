import Link from "next/link";

export default function RegisterForm() {
    return (
        <div>
            <div className="mx-auto max-w-md p-4 border rounded">
            <div className="m-2">
                <label className="text-white">Username</label>
                <input type="text" className="w-full border p-2 border rounded" />
            </div>

            <div className="m-2">
                <label className="text-white">Email</label>
                <input type="email" className="w-full border p-2 border rounded" />
            </div>

            <div className="m-2">
                <label className="text-white">Password</label>
                <input type="password" className="w-full border p-2 border rounded" />
            </div>

            <div className="m-2">
                <label className="text-white">Confirm Password</label>
                <input type="password" className="w-full border p-2 border rounded" />
            </div>

            <button className="m-2 w-full bg-blue-500 text-white p-2 rounded">
                Register
            </button>

            <div className="m-2 text-center">
                Already have an account?
                <Link href="/example/login" className="text-blue-500 underline">Login</Link>
            </div>
            
        </div>

        </div>
    );
}