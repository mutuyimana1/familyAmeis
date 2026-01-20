import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, Stethoscope, Microscope, Users } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Addressing Marital Issues",
    description:
      " Marriage counsellors specialize in resolving complex problems such as sexual dysfunction, cheating, and infidelity. Their expertise can help couples navigate and overcome these challenging issues.",
  },
  {
    icon: Microscope,
    title: "Improving Intimacy",
    description:
      "Professional guidance aids in navigating and resolving conflicts, improving communication, and fostering a healthier relationship dynamic. Counsellors provide strategies to manage disagreements and reduce tension.",
  },
  {
    icon: Microscope,
    title: "Conflict Resolution",
    description:
      "Professional guidance aids in navigating and resolving conflicts, improving communication, and fostering a healthier relationship dynamic. Counsellors provide strategies to manage disagreements and reduce tension.",
  },
  {
    icon: Users,
    title: "Enhancing Relationship Satisfaction",
    description:
      " Counseling provides tools and techniques to better understand each other’s needs, fostering mutual respect and enhancing overall satisfaction in the marriage.",
  },
];

export default function AboutPreviewSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-preview");

  return (
    <section className="py5-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounderd-lg overflow-hridden shardow-md">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <p className="font-semibold text-primary uppercase tracking-wider">
            Why Marriage Counseling is Essential?
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Marriage counselling is a valuable resource for couples experiencing difficulties in their relationship. Here’s why seeking professional help is crucial:
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
