import DoctorsSection from "@/components/sections/doctors";
import CtaBar from "@/components/sections/cta-bar";
import PageHeader from "@/components/page-header";

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        title="Our Doctors"
        breadcrumb="Doctors"
        imageUrl="/images/page-header.jpg"
        imageHint="family tools"
      />
      <DoctorsSection />
      <CtaBar />
    </>
  );
}
