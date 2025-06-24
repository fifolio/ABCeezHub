import React, { useState } from "react"

// UI
import { BarLoader } from "react-spinners"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// ICONS
import { ArrowLeft } from "lucide-react"

// STORES
import { useReset } from "@/stores"

// APIs
import resetPassword from "@/backend/services/auth/resetPassword"

export default function Reset() {
    const [email, setEmail] = useState<string | null>(null);
    const [loginLoading, setLoginLoading] = useState<boolean>(false);
    const { setDisplayResetPasswordForm } = useReset();
    const [openDialog, setOpenDialog] = useState(false);

    // Handle data submit
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoginLoading(true);

        const cleanedEmail = email?.toLowerCase();

        if (!cleanedEmail) {
            setLoginLoading(false);
            return;
        }

        const result = await resetPassword(cleanedEmail);
        if (result === false) {
            console.log(cleanedEmail)
            toast.error('Email address not found!', {
                description: "We couldn't find an account associated with this email address in out database. Please check for typos or contact ABCeez DIGITAL administration team for better help",
            });
        } else if (result === true) {
            setOpenDialog(true)
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Password Reset</h2>
                    <p className="text-gray-600">Enter your email address below and we'll send you a link to reset your password.</p>
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

                    {/*  Reset Button */}
                    <Button
                        disabled={loginLoading || email === null || email?.trim() === ''}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-6 px-4 rounded-lg font-bold cursor-pointer hover:bg-blue-800 transition-colors"
                    >
                        {loginLoading ? (<BarLoader
                            color="#ffffff"
                            loading={loginLoading}
                            className="mb-[2px]"
                        />) : 'Send Password Reset Link'}
                    </Button>

                    {/* Back To Login */}
                    <div className="text-center">
                        <hr className="mb-3" />
                        <div className="flex items-center justify-between">
                            <Button variant="default" onClick={() => setDisplayResetPasswordForm(false)} className="w-full bg-black text-white py-6 px-4 rounded-lg font-bold cursor-pointer hover:bg-gray-800 transition-colors">
                                <ArrowLeft /> Back to sign in
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Dialog to show when Successfully form processed */}
            <AlertDialog open={openDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader className='w-full'>
                        <AlertDialogTitle className='mx-auto font-bold'>Password Reset Initiated</AlertDialogTitle>
                        <AlertDialogDescription className='text-center'>
                            <div>
                                <img src="https://glori.netlify.app/images/resetLinkSent.gif" alt="Reset Link Sent" />
                            </div>
                            <p className="text-gray-700">
                                We've sent a password reset email to <span className="font-bold">{email}</span>. Please check your inbox (including spam folders) and follow the instructions to create a new password.
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Button onClick={() => setOpenDialog(false)} className='w-full cursor-pointer font-bold'>
                            I Understand, Thank you!
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
