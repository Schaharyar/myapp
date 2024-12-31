import Banner from "./_components/Banner";
import CategorySection from "./_components/CategorySection";
import FlexibleSection from "./_components/FlexibleSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import IconSection from "./_components/IconSection";



export default function Home() {
  return (
    <>
    {/* Header  */}

    <Header />

    {/* Hero Section */}
    <Hero />

    {/* IconSection */}
    <IconSection />

    {/* FlexibleSection */}
    <FlexibleSection /> 

    {/* CategorySection */}
    <CategorySection />

    {/* Banner */}
    <Banner />


  {/* Footer */}
  <Footer />  

    </>
  );
}
