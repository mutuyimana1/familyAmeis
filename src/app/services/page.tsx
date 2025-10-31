import ServicesSection from "@/components/sections/services";
import CtaBar from "@/components/sections/cta-bar";
import PageHeader from "@/components/page-header";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumb="Services"
        imageUrl="/images/page-header.jpg"
        imageHint="dental tools"
      />
      <ServicesSection />
      <CtaBar />
    </>
  );
}
