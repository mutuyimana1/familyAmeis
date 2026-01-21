import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stethoscope, MessageCircle, Heart, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Addressing Marital Issues",
    description:
      "Marriage counsellors specialize in resolving complex problems such as sexual dysfunction, cheating, and infidelity. Their expertise can help couples navigate and overcome these challenging issues.",
  },
  {
    icon: MessageCircle,
    title: "Conflict Resolution",
    description:
      "Professional guidance aids in navigating and resolving conflicts, improving communication, and fostering a healthier relationship dynamic.",
  },
  {
    icon: Heart,
    title: "Enhancing Relationship Satisfaction",
    description:
      "Counseling provides tools and techniques to better understand each other's needs, fostering mutual respect and enhancing overall satisfaction in the marriage.",
  },
];

export default function AboutPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-background">

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-1">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Why Marriage Counseling is Essential?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Marriage counselling is a valuable resource for couples experiencing difficulties in their relationship. Here's why seeking professional help is crucial for building a strong and healthy partnership.
          </p>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mt-4 text-lg text-muted-foreground">
          Rwanda, is divided into 30 districts three of them are located in Kigali, the capital of Rwanda: Gasabo,Kicukiro and Nyarugenge. Other prominent cities near Kigali include Musanze,Huye,Rubavu,Muhanga,.... AMIS DE LA FAMILLE AU RWANDA, is estimated to be around 10,000 individuals. For couples in Kigali and surrounding cities facing marital challenges such as infidelity, intimacy issues, and communication breakdowns, We provide expert marriage counselling services, offering professional support through online and in-person sessions to help couples navigate their relationship difficulties effectively.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Why Marriage Counseling is Essential?
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Marriage counselling is a valuable resource for couples experiencing difficulties in their relationship. Here's why seeking professional help is crucial for building a strong and healthy partnership.
              </p>
              <p>
                Learn to deal with the fact that you are not a perfect person but you are that deserves respect and honesty. Family gives you the roots to stand tall and strong, and professional guidance can help you navigate the complexities of relationships.
              </p>
            </div>
          </div>

          {/* Divider with Circular Button */}
          <div className="hidden lg:flex flex-col items-center justify-center relative h-full min-h-[400px]">
            <div className="absolute top-0 bottom-0 w-px bg-border" />
            <div className="relative z-10 bg-background">
              <Button
                size="icon"
                className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg"
                asChild
              >
                <Link href="/about">
                  <ArrowRight className="h-5 w-5 text-white" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-semibold text-lg text-primary mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
