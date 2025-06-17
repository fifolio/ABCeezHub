// UI COMPONENTS
import AllProducts from "./AllProducts";
import PortfolioHero from "./PortfolioHero";


export default function Portfolio() {
  return (
    <div className="space-y-3">
      <PortfolioHero />
      <AllProducts />
    </div>
  )
}
