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

const sliderContent = [
  {
    image: PlaceHolderImages.find((p) => p.id === "hero-slider-1"),
    subtitle: "Welcome to AMIS DE LA FAMILLE AU RWANDA",
    title: "strong family bonds, and marriage.",
    description:
      "To educate youth and adults on the importance of family life, the value of strong family bonds, and marriage preparation for lasting unions,build a family that is accessible to everyone, Combating violence and preventing conflicts that arise within families.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "hero-slider-2"),
    subtitle: "Your Smile, Our Priority",
    title: "strong family bonds, and marriage.",
    description:
      "To educate youth and adults on the importance of family life, the value of strong family bonds, and marriage preparation for lasting unions,build a family that is accessible to everyone, Combating violence and preventing conflicts that arise within families.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "hero-slider-3"),
    subtitle: "Expert and Compassionate Team",
    title: "Strong family bonds, and marriage.",
    description:
      "To educate youth and adults on the importance of family life, the value of strong family bonds, and marriage preparation for lasting unions,build a family that is accessible to everyone, Combating violence and preventing conflicts that arise within families.",
  },
];

export default function HeroSection() {
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
                        className="object-cover"
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
