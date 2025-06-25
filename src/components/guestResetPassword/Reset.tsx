import React, { useEffect, useState } from "react"
import { Link } from "react-router"

// UI
import { BarLoader } from "react-spinners"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// ICONS
import { ArrowRight, Eye, EyeOff, SendIcon } from "lucide-react"

// STORES
import { useReset, useSplashScreen } from "@/stores"

// APIs
import completeResetPassword from "@/backend/services/auth/completeResetPassword"

export default function Reset() {

    // Display Splash Screen
    const { setDisplaySplashScreen } = useSplashScreen();

    const [openDialog, setOpenDialog] = useState(false);

    // Store the UserId & the Secret key to be pushed to CompleteReset.tsx
    const [userId, setUserId] = useState<string | null>(null);
    const [secret, setSecret] = useState<string | null>(null);

    const [newPassword, setNewPassword] = useState<string | null>(null);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

    const [confirmNewPassword, setConfirmNewPassword] = useState<string | null>(null);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState<boolean>(false);

    const [resetLoading, setResetLoading] = useState<boolean>(false);

    const { setDisplayResetPasswordForm } = useReset();


    // Handle data submit
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setResetLoading(true);

        if (!newPassword || newPassword.length < 8) {
            setResetLoading(false);
            toast.warning("Password Too Short", {
                description: "Your password must be at least 8 characters long.",
                duration: 10000,
            });
            return;
        }

        if (!newPassword || !confirmNewPassword) {
            setResetLoading(false);
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setResetLoading(false);
            toast.warning("Passwords Don't Match", {
                description: "Please make sure your new password and confirmation password are the same.",
                duration: 10000,
            });
            return;
        }


        const result = await completeResetPassword({ userId: userId as string, secret: secret as string, newPassword: newPassword as string });

        if (result) {
            setOpenDialog(true)
            setResetLoading(false)
        } else {
            toast.error("Reset Link Issue", {
                description: "The password reset link may have expired or is invalid. Please request a new one and make sure you're copying the entire link from your email without any extra spaces.",
                duration: 10000,
            });
        }

        setResetLoading(false);
    }

    useEffect(() => {
        setDisplaySplashScreen(true)

        const params = new URLSearchParams(window.location.search);
        const userIdParam = params.get('userId');
        const secretParam = params.get('secret');

        if (userIdParam && secretParam) {
            setUserId(userIdParam);
            setSecret(secretParam);
            setDisplaySplashScreen(false)
        }

    }, []);

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
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Set Your New Password</h2>
                    <p className="text-gray-600">Enter your new password below to proceed with the reset process and regain access to your account.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* New Password Field */}
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-black mb-2">
                            Enter Your New Password
                        </label>
                        <p className="text-sm text-gray-600 font-normal my-2">Please enter your <b className="text-purple-800">8 characters</b> or more password.</p>
                        <div className="relative">
                            <input
                                disabled={resetLoading}
                                id="newPassword"
                                type={showNewPassword ? "text" : "password"}
                                value={newPassword as string}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                placeholder="Enter new password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm The New Password Field */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-2">
                            Confirm The New Password
                        </label>
                        <p className="text-sm text-gray-600 font-normal my-2">Re-enter the same new password to confirm it.</p>
                        <div className="relative">
                            <input
                                disabled={resetLoading}
                                id="confirmPassword"
                                type={showConfirmNewPassword ? "text" : "password"}
                                value={confirmNewPassword as string}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                placeholder="Confirm new password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Reset Button */}
                    <Button
                        disabled={resetLoading || newPassword === null || confirmNewPassword === null}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-6 px-4 rounded-lg font-bold cursor-pointer hover:bg-blue-800 transition-colors"
                    >
                        {resetLoading ? (<BarLoader
                            color="#ffffff"
                            loading={resetLoading}
                            className="mb-[2px]"
                        />) : (
                            <>
                                <p>Update Password</p> <ArrowRight />
                            </>
                        )}
                    </Button>

                    {/* Request a new reset link */}
                    <div className="text-center">
                        <hr className="mb-3" />
                        <div className="flex items-center justify-between">
                            <Link to="/" onClick={() => setDisplayResetPasswordForm(true)} className="flex items-center justify-center space-x-2 w-full bg-white text-gray-800 hover:text-black text-sm py-3.5 px-4 rounded-lg font-bold cursor-pointer hover:bg-gray-200 border transition-colors">
                                <SendIcon size={18} />
                                <p>Request a new reset link</p>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

            {/* Dialog to show when Successfully form processed */}
            <AlertDialog open={openDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader className='w-full'>
                        <AlertDialogTitle className='mx-auto font-bold'>Password Updated Successfully! </AlertDialogTitle>
                        <AlertDialogDescription className='text-center'>
                            <div>
                                <img src="https://raw.githubusercontent.com/fifolio/Glori/refs/heads/main/public/images/success.gif" alt="Password got Updated" />
                            </div>
                            <p className="text-gray-700">
                                You've successfully changed your password. You can now log in using your new password.
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Link to="/" className='w-full'>
                            <AlertDialogAction className='w-full cursor-pointer font-bold'>Thank You!</AlertDialogAction>
                        </Link>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
