import React, { useState } from "react"

// UI
import { BarLoader } from "react-spinners"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

// ICONS
import { ArrowRight, Eye, EyeOff } from "lucide-react"

// STORES
import { useReset, useUserState } from "@/stores"

// APIs
import { login } from "@/backend/services/auth/login"
import { account } from "@/backend/configs/configs"

export default function RightSide() {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loginLoading, setLoginLoading] = useState<boolean>(false);
    const { setIsLoggedin } = useUserState();
    const { setDisplayResetPasswordForm } = useReset();

    // Handle data submit
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoginLoading(true);

        if (!email || !password) {
            setLoginLoading(false);
            return;
        }

        const result = await login({ email: email.toLowerCase(), password });
        if (typeof (result) !== "object") {
            toast.error('Login failed', {
                description: "We couldn't find an account associated with this email address in out database. Please check your email and password."
            });
        } else {
            const username = (await account.get()).name;
            setIsLoggedin(true);
            toast.success(`Welcome back, ${username}!`, {
                description: "You’ve successfully logged in.",
            });
        }

        setLoginLoading(false);
    }


    return (
        <div className="flex-1 bg-white flex items-center justify-center px-8">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center space-y-5 mb-8">
                    <div>
                        <img
                            src="/assets/icon.png"
                            alt="Logo"
                            className="h-14 mx-auto"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-600">Sign in to your dashboard</p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            disabled={loginLoading}
                            id="email"
                            type="email"
                            value={email as string}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                disabled={loginLoading}
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password as string}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <a onClick={() => setDisplayResetPasswordForm(true)} className="cursor-pointer hover:underline text-sm text-blue-700 hover:text-blue-600">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <Button
                        disabled={loginLoading || email === null || email?.trim() === '' || password === null || password?.trim() === ''}
                        type="submit"
                        className="w-full bg-black text-white py-6 px-4 rounded-lg font-bold cursor-pointer hover:bg-gray-800 transition-colors"
                    >
                        {loginLoading ? (<BarLoader
                            color="#ffffff"
                            loading={loginLoading}
                            className="mb-[2px]"
                        />) : (
                            <>
                                <p>Sign in now</p> <ArrowRight />
                            </>
                        )}
                    </Button>

                    {/* Help Text */}
                    <div className="text-center">
                        <hr className="mb-3" />
                        <p className="text-xs text-gray-600">
                            Having trouble accessing with your credentials? Please contact ABCeez DIGITAL administration team for help.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
