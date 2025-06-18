// UI COMPONENTS
import AboutHero from "./aboutHero/AboutHero";
import OurProcess from "./ourProcess/OurProcess";
import OurTeam from "./ourTeam/OurTeam";


export default function About() {
  return (
    <div className="space-y-3">
      <AboutHero />
      <OurProcess />
      <OurTeam />
    </div>
  )
}
