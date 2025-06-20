import { Link } from "react-router";

// COMPONENTS
import AllProducts from "./AllProducts";

// PROMPTS
import { portfolioOverviewTexts } from "@/prompts";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

export default function PortfolioOverview() {

  const { setLeft, setTitle } = useNavbar();

  return (
    <div className="flex flex-col bg-white border-1 shadow-sm rounded-lg py-2 px-3">

      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between my-2">
          <h6 className="text-lg font-extrabold capitalize">{portfolioOverviewTexts.portfolioOverviewTitle}</h6>
          <Link
            to="/portfolio"
            onClick={() => {
              setLeft('portfolio');
              setTitle('portfolio');
            }}
            className="text-md text-blue-500 font-semibold hover:underline">
            See all
          </Link>
        </div>
        <p className="text-sm text-gray-700 italic">{portfolioOverviewTexts.portfolioOverviewSubtitle}</p>
      </div>

      <AllProducts />

    </div>
  )
}
