import type { ReactNode } from "react"

// UIS
import { DashSidebar } from "@/components/dashboard/DashSidebar";
import DashNavbar from "@/components/dashboard/DashNavbar";


type Props = {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {

  return (
    <div className="flex flex-row bg-white">
      <div className="flex">
        <DashSidebar />
      </div>
      <div className="flex flex-col w-full">
        <DashNavbar />
        {children}
      </div>
    </div>
  )
}