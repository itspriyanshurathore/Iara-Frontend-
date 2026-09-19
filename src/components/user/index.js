"use client";

import { useUserContext } from "@/context/userContext";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";


export function LoginSignUpForm() {
    return (<>
        <section className="px-[10%] py-[2.5%] my-[2.5%] flex flex-col items-center">
            <div style={{ width: "clamp(300px, 50%, 512px)" }} className="flex">
                <Tabs defaultValue="login" className={"w-full"}>
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <LoginForm />
                    </TabsContent>
                    <TabsContent value="signup">
                        <SignupForm />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    </>)
}


export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSubmit({ email, password });
    };

    return (
        <div className="max-w-md mx-auto p-6 pt-2 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-2">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[var(--blue-color)] text-white px-6 py-2 rounded-md cursor-pointer hover:bg-black"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export const SignupForm = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        otp: "",
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (otpSent == false) {
            try {
                const response = (await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/customer/send_otp/`,
                    {
                        email: formData.email
                    }
                )).data;
                console.log(response)
                if (response.success) {
                    toast.success(response.message)
                    setOtpSent(true)
                }
                else {
                    toast(response.message)
                }
            }
            catch (err) {
                console.log(err);
                toast.error("Unable to send OTP")
            }
        }
        else {
            try {
                const response = (await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/customer/sign_up/`,formData)).data;
                console.log(response)
                if (response.success) {
                    toast.success(response.message)
                }
                else {
                    toast(response.message)
                }
            }
            catch (err) {
                console.log(err);
                toast.error("Invalid Email or Password")
            }
        }
        setLoading(false)
    };

    const [otpSent, setOtpSent] = useState(false)


    return (
        <div className="max-w-md mx-auto p-6 pt-2 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-2">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                    <label className="block text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Phone Number</label>
                    <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {otpSent ? <div>
                    <label className="block text-sm font-medium">OTP</label>
                    <input
                        type="text"
                        name="otp"
                        value={formData.otp}
                        maxLength={6}
                        pattern="{\d*}"
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div> : null}
                {loading ?
                    <button
                        type="button"
                        className="w-full bg-[var(--blue-color)] flex justify-center text-white px-6 py-2 rounded-md hover:bg-black"
                    >
                        <span className="animate-spin">
                            <Loader />
                        </span>
                    </button>
                    : otpSent ? <button
                        type="submit"
                        className="w-full bg-[var(--blue-color)] text-white px-6 py-2 rounded-md cursor-pointer hover:bg-black"
                    >
                        Sign Up
                    </button> : <button
                        type="submit"
                        className="w-full bg-black text-white px-6 py-2 rounded-md cursor-pointer hover:bg-black"
                    >
                        Send Otp
                    </button>}
            </form>
        </div>
    );
};


export function Dashboard() {
    const { user, accessToken, isAuthenticated } = useUserContext();
    useEffect(() => {
        isAuthenticated()
    })
    return (
        <>
        </>
    )
}