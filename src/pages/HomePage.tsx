import { useEffect } from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";

const HomePage = () => {
  useEffect(() => {
    document.title =
      "Spike! | The Ultimate Documentation for Volleyball Lovers";
  });
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
};

export default HomePage;
