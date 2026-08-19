import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Rénovation Intérieure &amp; Couverture — Fontainebleau &amp; Paris | Studio Renov</title>
        <meta name="description" content="Artisan rénovation intérieure clé en main à Fontainebleau et Paris. Peinture, sols, électricité, plomberie, menuiseries, couverture. Devis gratuit." />
        <link rel="canonical" href="https://www.studio-renov.fr" />
        <meta property="og:url" content="https://www.studio-renov.fr" />
        <meta property="og:title" content="Rénovation Intérieure &amp; Couverture — Fontainebleau &amp; Paris | Studio Renov" />
        <meta property="og:description" content="Artisan rénovation intérieure clé en main à Fontainebleau et Paris. Peinture, sols, électricité, plomberie, menuiseries, couverture. Devis gratuit." />
      </Helmet>
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
