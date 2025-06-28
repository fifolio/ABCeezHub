import type { ReactNode } from "react"

// UIS
import { DashSidebar } from "@/components/dashboard/DashSidebar";
import DashNavbar from "@/components/dashboard/DashNavbar";


type Props = {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {

  document.title = "ABCeez Dash | Dashboard";

  return (
    <div className="flex flex-row bg-white">
      <div className="flex">
        <DashSidebar />
      </div>
      <div className="flex flex-col w-full">
        <DashNavbar />
        <div className="mt-16">
          {children}
        </div>
      </div>
    </div>
  )
}