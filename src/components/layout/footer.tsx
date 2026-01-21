import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Youtube } from 'lucide-react';
import { services } from '@/lib/data';
import { ToothIcon } from '@/components/icons';
import Image from 'next/image';
import img from "../../assets/images/logo.jpg"

// TikTok Icon Component (lucide-react doesn't have TikTok)
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Logo = () => (
    <Link href="/" className="flex items-center gap-2">
      <Image src={img} alt='logo' className="h-40 w-40 text-primary"/>
      <span className="text-2xl font-headline font-bold text-primary">AFR</span>
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
              Strong family bonds, and marriage preparation for lasting unions.
            </p>
            <div className="flex items-center gap-4 pt-4 flex-wrap">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex" aria-label="TikTok" title="TikTok">
                  <TikTokIcon size={20} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex" aria-label="Facebook" title="Facebook">
                  <Facebook size={20} className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex" aria-label="LinkedIn" title="LinkedIn">
                  <Linkedin size={20} className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex" aria-label="Instagram" title="Instagram">
                  <Instagram size={20} className="w-5 h-5" />
                </Link>
                <Link href="https://x.com/DesAdultes" target="_blank" className="text-muted-foreground hover:text-primary transition-colors inline-flex" aria-label="X (Twitter)" title="X (Twitter)">
                  <Twitter size={20} className="w-5 h-5" />
                </Link>
                <Link href="https://youtube.com/@amisdelafamilles?si=U-UyczYKkqb40iG4" target="_blank" className="text-muted-foreground hover:text-primary transition-colors inline-flex" aria-label="YouTube" title="YouTube">
                  <Youtube size={20} className="w-5 h-5" />
                </Link>
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
                <span className="text-muted-foreground">AFR kigali nyarugenge</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">(250) 788 226 986</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">famillesdesamis@gmail.com</span>
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
          <p>&copy; {new Date().getFullYear()} AFR. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
