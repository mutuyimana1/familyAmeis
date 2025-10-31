import AboutPreviewSection from "@/components/sections/about-preview";
import DoctorsSection from "@/components/sections/doctors";
import TestimonialsSection from "@/components/sections/testimonials";
import CtaBar from "@/components/sections/cta-bar";
import PageHeader from "@/components/page-header";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb="About Us"
        imageUrl="/images/page-header.jpg"
        imageHint="family tools"
      />
      <AboutPreviewSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CtaBar />
    </>
  );
}
