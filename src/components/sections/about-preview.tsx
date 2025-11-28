import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, Stethoscope, Microscope, Users } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Professional mental health counseling",
    description:
      "We provide professional mental health counseling, family therapy, psychoeducation, and more to improve individual and Families well-being.",
  },
  {
    icon: Microscope,
    title: "Resolving family conflicts",
    description:
      "We assist in resolving family conflicts, and support for individuals coping with marital challenges.",
  },
  {
    icon: Users,
    title: "Preventing Conflict Services",
    description:
      "Build a family that is accessible to everyone, Combating violence and preventing conflicts that arise within families.",
  },
];

export default function AboutPreviewSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-preview");

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-md">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-6 rounded-lg max-w-xs">
              <p className="font-headline text-lg font-bold">5+</p>
              <p>Years of experience in Familly bonds</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Committed educate youth and adults on the importance of family,
              Combat violence and prevent conflict...
            </h2>
            <p className="text-muted-foreground text-lg">
              Learn to deal with the fact that you are not a perfect person but
              you are that deserves respect and honesty. Family gives you the
              roots to stand tall and strong
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-primary">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-4" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
