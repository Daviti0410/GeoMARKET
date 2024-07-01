"use client";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (newCategory) => {
    router.push(`/search?category=${encodeURIComponent(newCategory)}`);
  };

  return (
    <div>
      <Navbar handleCategoryClick={handleCategoryClick} />
      <HeroSection />
    </div>
  );
}
