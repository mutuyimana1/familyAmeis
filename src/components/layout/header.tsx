"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, User } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ToothIcon } from '@/components/icons';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <ToothIcon className="h-8 w-8 text-primary" />
    <span className="text-2xl font-headline font-bold text-primary">MediDent</span>
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TopBar = () => (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 hidden md:flex justify-between items-center py-2 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(123) 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@medident.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Mon - Fri: 8:00 - 19:00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Facebook"><Facebook size={16} /></Link>
          <Link href="#" aria-label="Twitter"><Twitter size={16} /></Link>
          <Link href="#" aria-label="Instagram"><Instagram size={16} /></Link>
          <Link href="#" aria-label="LinkedIn"><Linkedin size={16} /></Link>
        </div>
      </div>
    </div>
  );

  const MainNav = () => (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={24} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-background p-0">
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <Logo />
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X size={24} />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetTrigger>
            </div>
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto p-6 border-t space-y-4">
                <Button className="w-full" asChild>
                    <Link href="/contact">Book an Appointment</Link>
                </Button>
                 <Button variant="outline" className="w-full" asChild>
                    <Link href="/login">
                        <User className="mr-2 h-4 w-4" />
                        Login
                    </Link>
                </Button>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className={cn(
      "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "shadow-lg bg-background/80 backdrop-blur-sm" : ""
    )}>
      <TopBar />
      <div className={cn("bg-background/80 backdrop-blur-sm", isScrolled && "bg-transparent backdrop-blur-none")}>
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Logo />
          <MainNav />
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex" asChild>
                <Link href="/contact">Book an Appointment</Link>
            </Button>
            <Button variant="outline" className="hidden md:flex" asChild>
                <Link href="/login">
                    <User className="mr-2 h-4 w-4" />
                    Login
                </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
