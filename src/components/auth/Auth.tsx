import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default function Auth() {

  return (
    <div className="min-h-screen overflow-hidden flex bg-white">
      {/* Left Side - Background */}
      <LeftSide />

      {/* Right Side - Authentication Form */}
      <RightSide />      
    </div>
  )
}
