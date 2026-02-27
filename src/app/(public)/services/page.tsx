import { servicesData } from "@/lib/services-data";
import Link from "next/link";
import { ArrowRight, ActivitySquare } from "lucide-react";

export default function ServicesIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">Comprehensive Care</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Counseling Services
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            We offer specialized support designed to heal, maintain, and strengthen individuals, couples, and family relationships in every phase of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <div key={service.slug} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <ActivitySquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.shortDescription}</p>
              
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-blue-600 font-bold uppercase tracking-wide text-sm group-hover:underline mt-auto">
                Read Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
