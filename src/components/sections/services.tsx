import Link from 'next/link';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Comprehensive Dental Care
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From routine check-ups to advanced treatments, we offer a wide range of services to meet all your dental needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="group flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="mx-auto bg-accent rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary">
                  <service.icon className="w-10 h-10 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <div className="mt-6">
                 <Button variant="ghost" asChild>
                    <Link href={`/services/${service.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
