import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaBar() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <h2 className="font-headline text-3xl font-bold text-primary-foreground max-w-2xl">
            Ready for a Healthier, Brighter Smile?
          </h2>
          <Button size="lg" variant="secondary" className="text-lg shrink-0" asChild>
            <Link href="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
