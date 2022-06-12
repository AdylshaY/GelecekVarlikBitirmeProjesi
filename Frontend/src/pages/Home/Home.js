import React from "react";
import HomeHero from "../../components/HomeHero/HomeHero";
import Navbar from "../../components/Navbar/Navbar";
import HomeFooter from "../../components/HomeFooter/HomeFooter";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeFooter />
    </>
  );
}

export default Home;
