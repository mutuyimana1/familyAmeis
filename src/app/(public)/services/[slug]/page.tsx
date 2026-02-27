import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/services" className="inline-flex items-center text-blue-600 hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all services
        </Link>
        
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-blue-700 px-8 py-12 md:px-12 md:py-16 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{service.title}</h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">{service.shortDescription}</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-12">
              {service.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {service.listItems && service.listItems.length > 0 && (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-12">
                {service.listTitle && (
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.listTitle}</h3>
                )}
                <ul className="space-y-4">
                  {service.listItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="text-center pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Need personalized assistance?</h3>
              <p className="text-slate-500 mb-8 max-w-xl mx-auto">Our trained professionals are here to provide comfort, clarity, and expert care tailored to your specific situation.</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8" asChild>
                <Link href="/contact">Book an Appointment Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
