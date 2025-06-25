// UIs
import LeftSide from "../auth/LeftSide";
import Reset from "./Reset";

export default function GuestResetPassword() {

    return (
        <div className="min-h-screen overflow-hidden flex bg-white">
            {/* Left Side - Background */}
            <LeftSide />

            {/* Reset Password Input */}
            <Reset />
        </div>
    )
}
