import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutPreviewSection from "@/components/sections/about-preview";
import DoctorsSection from "@/components/sections/doctors";
import TestimonialsSection from "@/components/sections/testimonials";
import BlogPreviewSection from "@/components/sections/blog-preview";
import CtaBar from "@/components/sections/cta-bar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <DoctorsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CtaBar />
    </>
  );
}
