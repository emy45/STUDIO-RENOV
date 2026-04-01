import { Hero } from '../components/Hero';
import { TrustBanner } from '../components/TrustBanner';
import { Services } from '../components/Services';
import { Showroom } from '../components/Showroom';
import { Gallery } from '../components/Gallery';
import { WhyUs } from '../components/WhyUs';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <div className="hidden sm:block">
        <TrustBanner />
      </div>
      <Services />
      <Showroom />
      <Gallery />
      <WhyUs />
      <Contact />
    </>
  );
}
