import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecommendedProfessionalsSlider from "../components/RecommendedProfessionals";
import ArticlesSlider from "../components/Articles";
import PhotoAndTextSection from "../components/PhotoText";
import RecommendedServicesSection from "../components/RecommendedServices";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RecommendedProfessionalsSlider />
      <ArticlesSlider />
      <PhotoAndTextSection />
      <RecommendedServicesSection />
      <Footer />
    </div>
  );
}

export default Home;
