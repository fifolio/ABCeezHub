// UI COMPONENTS
import AllProjects from "./allProjects/AllProjects";
import PortfolioHero from "./portfolioHero/PortfolioHero";


export default function Portfolio() {
  return (
    <div className="space-y-3">
      <PortfolioHero />
      <AllProjects />
    </div>
  )
}
