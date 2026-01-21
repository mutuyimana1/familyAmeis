import { GraduationCap, Heart, Laptop, Shield } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Counselors",
    description:
      "A F RWANDA connects couples with highly qualified marriage counsellors who specialize in sexual dysfunction, infidelity, intimacy issues, and other marital concerns. These professionals use evidence-based approaches to ensure effective treatment.",
  },
  {
    icon: Heart,
    title: "Personalized Therapy",
    description:
      "The platform provides tailored therapy plans to address specific marital challenges, ensuring that couples receive relevant and effective support.",
  },
  {
    icon: Laptop,
    title: "Convenient Online Counseling",
    description:
      "Couples can access counselling sessions from anywhere, making it easy to receive professional help without disrupting their daily lives.",
  },
  {
    icon: Shield,
    title: "Confidential and Supportive Environment",
    description:
      "Talkto AFR provides a confidential and supportive space where couples can openly discuss their issues without fear of judgment.",
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a2a56] relative overflow-hidden">
      {/* Wavy Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: '100%' }}
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#1d4f34"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why AMIS DE LA FAMILLE AU RWANDA is the Best Choice for Marriage Counseling?
          </h2>
          <p className="text-lg text-blue-200">
            We lead platform for marriage counselling in Kigali, offering expert support to help couples address their marital issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="bg-blue-400/20 rounded-xl p-4 w-fit mb-4">
                  <feature.icon className="h-10 w-10 text-blue-300" />
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-bold">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
