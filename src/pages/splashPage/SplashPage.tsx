import { BarLoader } from "react-spinners";


export default function SplashPage() {
    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                <img src="/assets/splash_logo.png" alt="ABCeez DIGITAL" className="h-40 w-40" />
                <BarLoader color="darkblue" loading={true} />
            </div>
        </div>
    )
}
