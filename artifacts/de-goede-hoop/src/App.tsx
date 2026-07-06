import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TuisPage from "@/pages/TuisPage";
import OorOnsPage from "@/pages/OorOnsPage";
import VerblyPage from "@/pages/VerblyPage";
import AansoekPage from "@/pages/AansoekPage";
import KontakPage from "@/pages/KontakPage";
import PopiPage from "@/pages/PopiPage";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-4 text-center">
      <h1 className="font-serif text-4xl text-navy mb-4">404 — Bladsy nie gevind</h1>
      <p className="text-muted mb-8">Die bladsy wat jy soek, bestaan nie.</p>
      <Link href="/" className="inline-block bg-navy text-cream px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors">
        Terug na Tuis
      </Link>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><TuisPage /></Layout>} />
      <Route path="/oor-ons" component={() => <Layout><OorOnsPage /></Layout>} />
      <Route path="/verblyf" component={() => <Layout><VerblyPage /></Layout>} />
      <Route path="/aansoek" component={() => <Layout><AansoekPage /></Layout>} />
      <Route path="/kontak" component={() => <Layout><KontakPage /></Layout>} />
      <Route path="/popi" component={() => <Layout><PopiPage /></Layout>} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <Router />
    </WouterRouter>
  );
}
