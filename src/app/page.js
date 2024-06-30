"use client";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (cat) => {
    router.push(`/search?category=${encodeURIComponent(cat)}`);
  };

  return (
    <div>
      <Navbar handleCategoryClick={handleCategoryClick} />
      <HeroSection />
    </div>
  );
}
