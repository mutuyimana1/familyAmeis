import type { Icon } from 'lucide-react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { ToothIcon, DentalImplantIcon, RootCanalIcon, WhiteningIcon, DentalCrownIcon, DentalBracesIcon } from '@/components/icons';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const services = [
  {
    icon: ToothIcon,
    title: 'General Dentistry',
    description: 'Comprehensive care for all ages, including checkups, cleanings, and fillings.',
    slug: 'general-dentistry',
  },
  {
    icon: WhiteningIcon,
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional in-office or take-home whitening treatments.',
    slug: 'teeth-whitening',
  },
  {
    icon: DentalImplantIcon,
    title: 'Dental Implants',
    description: 'A permanent solution for missing teeth that looks and feels natural.',
    slug: 'dental-implants',
  },
  {
    icon: DentalBracesIcon,
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct your bite with modern braces and aligners.',
    slug: 'orthodontics',
  },
  {
    icon: RootCanalIcon,
    title: 'Root Canal Therapy',
    description: 'Save your natural tooth with our expert root canal treatments.',
    slug: 'root-canal-therapy',
  },
  {
    icon: DentalCrownIcon,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, bonding, and other cosmetic procedures.',
    slug: 'cosmetic-dentistry',
  },
];


export const doctors = [
  {
    id: 1,
    name: 'Dr. Jessica Taylor',
    specialty: 'General Dentist',
    image: 'doctor-1',
    social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
    ],
  },
  {
    id: 2,
    name: 'Dr. Kevin Martin',
    specialty: 'Orthodontist',
    image: 'doctor-2',
    social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
    ],
  },
  {
    id: 3,
    name: 'Dr. Amanda Bell',
    specialty: 'Pediatric Dentist',
    image: 'doctor-3',
    social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York',
    image: 'testimonial-1',
    rating: 5,
    comment: 'The best dental care I have ever had. The staff is friendly and professional. I would highly recommend this clinic to anyone!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'Los Angeles',
    image: 'testimonial-2',
    rating: 5,
    comment: 'My kids love coming to the dentist now! Dr. Amanda Bell is amazing with children. The whole experience was smooth and stress-free.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    location: 'Chicago',
    image: 'testimonial-1',
    rating: 5,
    comment: 'I got dental implants and the result is fantastic. Dr. Taylor did an incredible job. The process was painless and worth every penny.',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Regular Dental Check-ups',
    slug: 'regular-dental-check-ups',
    date: '2024-07-22',
    category: 'Dental Health',
    excerpt: 'Discover why regular visits to your dentist are crucial for maintaining not just your oral health, but your overall well-being...',
    image: 'blog-1',
  },
  {
    id: 2,
    title: 'Everything You Need to Know About Teeth Whitening',
    slug: 'about-teeth-whitening',
    date: '2024-07-15',
    category: 'Cosmetic Dentistry',
    excerpt: 'Thinking about brightening your smile? Here’s a complete guide to professional teeth whitening options and what you can expect.',
    image: 'blog-2',
  },
  {
    id: 3,
    title: 'Tips for Your Child’s First Dental Visit',
    slug: 'childs-first-dental-visit',
    date: '2024-07-08',
    category: 'Pediatric Dentistry',
    excerpt: 'Make your child’s first trip to the dentist a positive experience with these helpful tips for parents.',
    image: 'blog-3',
  },
];
