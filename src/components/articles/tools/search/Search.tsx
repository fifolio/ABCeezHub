import { useEffect, useState } from "react";

// UI COMPONENTS
import { Input } from "@/components/ui/input"

// ICONS
import { SearchIcon } from "lucide-react"
import { useSearch } from "@/stores/filters/AllArticles/Tools/search"


export default function Search() {

    const { setSearchTerm } = useSearch();

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setSearchTerm(searchValue.trim());
        }, 500)
    }, [searchValue])

    return (
        <>
            <SearchIcon className="absolute mt-[13px] ml-3 text-gray-400" size="23" />
            <Input
                type="text"
                placeholder="Search articles..."
                className="
            bg-white
                shadow-xs
                pl-11
                py-6
                "
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </>
    )
}
