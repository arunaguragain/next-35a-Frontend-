import {NextRequest, NextResponse} from "next/server";
import{getUserData, getAuthToken} from "./lib/cookie";
const publicPaths = ["/login", "/register", "/forget-password"];
const adminPaths =["/admin"];
export async function proxy(req: NextRequest){
    //login here
    const{pathname} = req.nextUrl;
    const token = await getAuthToken();
    const user = token ? await getUserData() : null;

    const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
    const isAdminPath = adminPaths.some(path => pathname.startsWith(path));

    if(!user && !isPublicPath){
        return NextResponse.redirect(new URL ("/login", req.url));
    }


    if(user && token){
        if(isAdminPath && user.role !== "admin"){
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
    if(pathname && user){
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();  //continue/granted
}
export const config = {
    matcher:[
        //list of path to apply rules/proxy
        "/admin/:path*",
        "/login",
        "/register"
    ],
}