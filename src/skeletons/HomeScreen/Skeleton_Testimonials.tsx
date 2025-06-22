import { Skeleton } from "@/components/ui/skeleton"

export default function Skeleton_Testimonials() {
    return (
        <div className="flex flex-col space-y-3 w-full items-center justify-center">
            <Skeleton className="h-[200px] mt-4 w-full rounded-xl bg-gray-300" />
        </div>
    )
}
