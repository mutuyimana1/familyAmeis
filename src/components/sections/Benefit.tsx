import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const benefits = [
  {
    title: "Convenience",
    description:
      "Couples can conveniently incorporate therapy into their hectic schedules by attending sessions from the comfort of their own home, which eliminates the need for travel.",
  },
  {
    title: "Flexibility",
    description:
      "A F RWANDA offers flexible scheduling options, allowing couples to choose times that work best for them and their partners.",
  },
  {
    title: "Privacy",
    description:
      "Sessions are conducted in a private setting, ensuring confidentiality and a comfortable space for open discussion about sensitive issues.",
  },
  {
    title: "Expert Access",
    description:
      "Online platforms connect couples with experienced counsellors specializing in various aspects of marriage counselling, including intimacy, infidelity, and sexual dysfunction.",
  },
];

export default function Benefit() {
  const benefitImage = PlaceHolderImages.find((p) => p.id === "about-preview") || 
                       PlaceHolderImages.find((p) => p.id === "hero-slider-1");

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image with Curved Overlay */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/2] shadow-lg">
              {benefitImage && (
                <Image
                  src={benefitImage.imageUrl}
                  alt={benefitImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-ai-hint={benefitImage.imageHint}
                />
              )}
              {/* Curved Blue Overlay from top-left */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg
                  className="absolute top-0 left-0 w-full h-full"
                  viewBox="0 0 600 800"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 Q150,50 300,0 Q450,50 600,0 L600,800 L0,800 Z"
                    fill="rgba(33, 50, 95, 0.75)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4">
            <div>
              <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                The Benefits of Online Marriage Counseling
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Marriage counselling has become an increasingly popular option, offering several advantages:
              </p>
            </div>

            {/* Features List in Two Columns */}
            <div className="grid md:grid-cols-2 gap-3 mt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-semibold text-sm text-primary mb-0.5">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Conclusion Section */}
        <div className="mt-12 md:mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">
                Conclusion
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Prioritizing your marriage is essential for maintaining a healthy and fulfilling relationship. AMIS DE LA FAMILLE AU RWANDA offers exceptional marriage counselling, providing expert support for issues such as sexual dysfunction, infidelity, and intimacy challenges. With its convenient, confidential, and personalized services, AMIS DE LA FAMILLE is dedicated to helping couples build stronger, more satisfying relationships. Explore their services to find the right online counsellor and take proactive steps toward enhancing your marriage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}