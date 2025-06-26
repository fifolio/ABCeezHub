import { DashSidebar } from "@/components/dashboard/DashSidebar";
import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {

  return (
    <div className="bg-white">
      <DashSidebar />
      {children}
    </div>
  )
}