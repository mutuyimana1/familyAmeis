"use client"

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We take pride in our patients' satisfaction. Here's what some of them have to say about their experience at AMIS DE LA FAMILLE AU RWANDA.
          </p>
        </div>
        
        <TooltipProvider>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.image);
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2">
                    <div className="p-1">
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                          <Quote className="w-12 h-12 text-accent" />
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <p className="text-muted-foreground italic flex-grow line-clamp-3 cursor-help">"{testimonial.comment}"</p>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-md">
                              <p className="text-sm">"{testimonial.comment}"</p>
                            </TooltipContent>
                          </Tooltip>
                        <div className="flex flex-col items-center pt-4">
                            {testimonialImage && (
                                <Image
                                    src={testimonialImage.imageUrl}
                                    alt={`Photo of ${testimonial.name}`}
                                    width={50}
                                    height={50}
                                    className="rounded-full mb-4"
                                    data-ai-hint={testimonialImage.imageHint}
                                />
                            )}
                            <h4 className="font-headline font-semibold text-lg text-primary">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                             <div className="flex mt-2">
                                {Array(testimonial.rating).fill(0).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </TooltipProvider>
      </div>
    </section>
  );
}
