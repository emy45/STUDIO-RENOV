import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingCallButton } from '../components/FloatingCallButton';
import { CookieBanner } from '../components/CookieBanner';
import { ScrollToTop } from '../components/ScrollToTop';

export function Root() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
      <CookieBanner />
    </div>
  );
}