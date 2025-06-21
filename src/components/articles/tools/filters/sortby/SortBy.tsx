// UI COMPONENTS
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// STORES
import { useSortBy } from "@/stores/filters/AllArticles/Tools/sortBy"


export default function SortBy() {

  const { setSortBy } = useSortBy();

  return (
    <>
      <Select
        onValueChange={(value) => {
          setSortBy(value)
        }}
      >
        <SelectTrigger className="bg-white shadow-xs py-6 w-full">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort articles by</SelectLabel>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
