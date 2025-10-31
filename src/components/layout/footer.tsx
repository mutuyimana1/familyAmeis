import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { services } from '@/lib/data';
import { ToothIcon } from '@/components/icons';

const Logo = () => (
    <Link href="/" className="flex items-center gap-2">
      <ToothIcon className="h-8 w-8 text-primary" />
      <span className="text-2xl font-headline font-bold text-primary">MediDent</span>
    </Link>
  );

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              MediDent is a leading dental clinic dedicated to providing top-quality care. Our experienced team uses the latest technology to ensure your comfort and health.
            </p>
            <div className="flex items-center gap-4 pt-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-semibold text-primary">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-semibold text-primary">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">123 Dental St, Smileville, USA 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">info@medident.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-semibold text-primary">Opening Hours</h3>
            <ul className="space-y-3 text-sm">
               <li className="flex items-center gap-3">
                <Clock size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">Monday - Friday: 8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</span>
              </li>
               <li className="flex items-center gap-3">
                <Clock size={16} className="text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MediDent Redux. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
