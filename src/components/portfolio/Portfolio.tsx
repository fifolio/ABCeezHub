// UI COMPONENTS
import AllProducts from "./allProducts/AllProducts";
import PortfolioHero from "./portfolioHero/PortfolioHero";


export default function Portfolio() {
  return (
    <div className="space-y-3">
      <PortfolioHero />
      <AllProducts />
    </div>
  )
}
