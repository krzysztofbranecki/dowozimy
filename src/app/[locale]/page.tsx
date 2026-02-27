import Header from "@/components/Header";
import Hero from "@/components/Hero";
import USP from "@/components/USP";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TrustSignals from "@/components/TrustSignals";
import Gallery from "@/components/Gallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <USP />
        <Services />
        <Process />
        <TrustSignals />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
