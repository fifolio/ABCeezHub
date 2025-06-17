// UI COMPONENTS
import { Input } from "@/components/ui/input"

// ICONS
import { SearchIcon } from "lucide-react"


export default function Search() {
    return (
        <>
            <SearchIcon className="absolute mt-[11.5px] ml-3 text-gray-400" size="23" />
            <Input
                type="text"
                placeholder="Search articles..."
                className="
              bg-white
                shadow-sm
                pl-11
                py-6
                "
            />
        </>
    )
}
