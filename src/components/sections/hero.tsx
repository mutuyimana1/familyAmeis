"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/appointment-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useTranslations } from "next-intl";

const sliderContent = [
  {
    image: PlaceHolderImages.find((p) => p.id === "hero-slider-1"),
    subtitle: "Welcome to AMIS DE LA FAMILLE AU RWANDA",
    title: "Strong familly with conflict free.",
    description:
      "Amis de la Famille Rwanda is an organization created for those who share the same goal and who are complementary in terms of family building and finding solutions to family conflicts",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "hero-slider-2"),
    subtitle: "Your Smile, Our Priority",
    title: "Educate, Counsel and support familly.",
    description:
      " Amis de la Famille Rwanda aims to provide family education online, provide face-to-face counseling to those who need it, provide support to those who have family conflicts, and provide counseling to those who are experiencing marital breakdown. All of this is done with the help of experts who are part of the organization.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "hero-slider-3"),
    subtitle: "Expert and Compassionate Team",
    title: " Nothing in life makes sense without a smile in family.",
    description:
      "We provide romantic relationship skills, positive parenting skills, work stress management and trauma healing.",
  },
];

export default function HeroSection() {
  // const t = useTranslations('home');
  return (
    <section className="relative bg-primary">
      <div className="container mx-auto px-0 md:px-4">
        <div className="relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {sliderContent.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[80vh] min-h-[700px] md:h-auto md:aspect-[16/7]">
                    {slide.image && (
                      <Image
                        src={slide.image.imageUrl}
                        alt={slide.image.description}
                        fill
                        priority={index === 0}
                        className="object-contain "
                        data-ai-hint={slide.image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative h-full flex items-center">
                      <div className="container mx-auto px-4">
                        <div className="max-w-xl text-white space-y-4">
                          <p className="font-semibold text-accent uppercase tracking-wider">
                            {slide.subtitle}
                          </p>
                          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
                            {slide.title}
                          </h1>
                          <p className="text-lg md:text-xl text-gray-200">
                            {slide.description}
                          </p>
                          <Button
                            size="lg"
                            variant="secondary"
                            className="mt-4"
                            asChild
                          >
                            <Link href="/about">Learn More</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>

          <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-8 z-10 w-full md:w-auto p-4 md:p-0 mt-8 md:mt-0">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
