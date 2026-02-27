"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
} from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ToothIcon } from "@/components/icons";
import Image from "next/image";
import img from "../../assets/images/logo.jpg";
import LanguageSwitcher from "../languageSwitcher";
const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image src={img} alt="logo" className="h-20 w-20 text-primary" />
    <span className="text-lg font-headline font-bold text-primary uppercase">
      <span className="text-[#00391a]">Amis de la</span> <br />{" "}
      <span className="text-[#ef2c21]">famille au</span> <br /> Rwanda
    </span>
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<
    null | (typeof navLinks)[number]["name"]
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TopBar = () => (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 hidden md:flex justify-between items-center py-2 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(250) 788 226 986</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>famillesdesamis@gmail.comm</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Mon - Fri: 8:00 - 19:00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Facebook">
            <Facebook size={16} />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter size={16} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram size={16} />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin size={16} />
          </Link>
        </div>
      </div>
    </div>
  );

  const MainNav = () => (
    <nav className="hidden md:flex items-center gap-6 relative">
      {navLinks.map((link) => (
        <div
          key={link.name}
          className="relative group"
          onClick={() => setActiveMenu(link.name)}
          // onMouseLeave={() => setActiveMenu(null)}
        >
          {/* TOP-LEVEL LINK */}
          {/* {!link.submenu ? ( */}
            <Link
              href={link.href}
              className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              {link.name}
            </Link>
          {/* // ) : (
          //   <span className="font-medium text-foreground flex items-center gap-1 cursor-pointer">
          //     {link.name}
          //     <span className="text-xs">▼</span>
          //   </span>
          // )} */}

          {/* SUBMENU */}
          {/* {link.submenu && activeMenu === link.name && (
            <div className="absolute left-0 mt-3 w-64 bg-white shadow-xl border rounded-lg py-3 z-50">
              <Link
                href={link.href}
                className="px-4 pb-2 text-xs font-semibold text-gray-500 tracking-wide"
              >
                {link.name.toUpperCase()}
              </Link>

              <div className="border-b mb-2" />

              <ul className="flex flex-col" onClick={() => setActiveMenu(null)}>
                {link.submenu.map((sub, i) => (
                  <li key={i}>
                    <Link
                      // href={sub.href}
                      href={""}
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      {sub.name}
                      <span>›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
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
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[350px] bg-background p-0"
      >
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
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-lg bg-background/80 backdrop-blur-sm" : ""
      )}
    >
      <TopBar />
      <div
        className={cn(
          "bg-background/80 backdrop-blur-sm",
          isScrolled && "bg-transparent backdrop-blur-none"
        )}
      >
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
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
