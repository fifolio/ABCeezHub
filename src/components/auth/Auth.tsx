// UIs
import LeftSide from "./LeftSide"
import Reset from "./Reset"
import RightSide from "./RightSide"

// STORES
import { useReset } from "@/stores";

export default function Auth() {

  const { displayResetPasswordForm } = useReset();


  return (
    <div className="min-h-screen overflow-hidden flex bg-white">
      {/* Left Side - Background */}
      <LeftSide />

      {/* Right Side - Authentication Form && Reset Password Input */}
      {displayResetPasswordForm ? (<Reset />) : (<RightSide />)}
    </div>
  )
}
