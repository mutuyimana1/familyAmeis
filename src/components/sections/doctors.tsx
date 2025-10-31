import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function DoctorsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Meet Our Expert familys
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team of experienced and caring family professionals is dedicated
            to providing you with personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => {
            const doctorImage = PlaceHolderImages.find(
              (p) => p.id === doctor.image
            );
            return (
              <Card
                key={doctor.id}
                className="group overflow-hidden text-center"
              >
                <div className="relative aspect-square overflow-hidden">
                  {doctorImage && (
                    <Image
                      src={doctorImage.imageUrl}
                      alt={`Portrait of ${doctor.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={doctorImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {doctor.social.map((socialLink, index) => (
                        <Link
                          key={index}
                          href={socialLink.href}
                          className="bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label={socialLink.icon.displayName}
                        >
                          <socialLink.icon size={20} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-xl font-bold text-primary">
                    {doctor.name}
                  </h3>
                  <p className="text-primary/80">{doctor.specialty}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
