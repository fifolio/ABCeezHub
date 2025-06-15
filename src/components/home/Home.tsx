// COMPONENTS
import TopArticles from "./topArticles/TopArticles";
import Hero from "./hero/Hero";
import PortfolioOverview from "./portfolioOverview/PortfolioOverview";
import Testimonials from "./testimonials/Testimonials";

export default function Home() {

  return (
    <div className="space-y-3">
      <Hero />
      <TopArticles />
      <PortfolioOverview />
      <Testimonials />
    </div>
  )
}
