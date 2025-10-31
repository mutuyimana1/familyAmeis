import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Stethoscope, Microscope, Users } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Professional Staff',
    description: 'Our team consists of highly skilled and certified dental professionals.',
  },
  {
    icon: Microscope,
    title: 'Modern Technology',
    description: 'We use the latest technology for accurate diagnostics and treatments.',
  },
  {
    icon: Users,
    title: 'Patient-Centered Care',
    description: 'Your comfort and health are our top priorities.',
  },
];

export default function AboutPreviewSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-preview');

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
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
                <p className="font-headline text-lg font-bold">25+</p>
                <p>Years of experience in dental care</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="font-semibold text-primary uppercase tracking-wider">Why Choose Us</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Committed to Excellence in Dental Care
            </h2>
            <p className="text-muted-foreground text-lg">
              At MediDent, we are dedicated to providing the highest standard of dental care in a comfortable and friendly environment. We believe in building lasting relationships with our patients based on trust and exceptional results.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-primary">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-4">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
