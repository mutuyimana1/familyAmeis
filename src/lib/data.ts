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
    title: 'General family',
    description: 'Comprehensive care for all ages, including checkups, cleanings, and fillings.',
    slug: 'general-family',
  },
  {
    icon: WhiteningIcon,
    title: 'family bonds',
    description: 'Brighten your smile with our professional in-office or take-home whitening treatments.',
    slug: 'teeth-whitening',
  },
  {
    icon: DentalImplantIcon,
    title: 'family Implants',
    description: 'A permanent solution for missing family that looks and feels natural.',
    slug: 'family-implants',
  },
  {
    icon: DentalBracesIcon,
    title: 'Orthodontics',
    description: 'Straighten your family and correct your bite with modern braces and aligners.',
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
    title: 'Cosmetic family',
    description: 'Enhance your smile with veneers, bonding, and other cosmetic procedures.',
    slug: 'cosmetic-family',
  },
];


export const doctors = [
  {
    id: 1,
    name: 'Dr. Jessica Taylor',
    specialty: 'General family',
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
    specialty: 'Pediatric family',
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
    comment: 'The best Familly bonds I have ever had. The staff is friendly and professional. I would highly recommend this clinic to anyone!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'Los Angeles',
    image: 'testimonial-2',
    rating: 5,
    comment: 'My kids love coming to the family now! Dr. Amanda Bell is amazing with children. The whole experience was smooth and stress-free.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    location: 'Chicago',
    image: 'testimonial-1',
    rating: 5,
    comment: 'I got family implants and the result is fantastic. Dr. Taylor did an incredible job. The process was painless and worth every penny.',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Regular family Check-ups',
    slug: 'regular-family-check-ups',
    date: '2024-07-22',
    category: 'family Health',
    excerpt: 'Discover why regular visits to your family are crucial for maintaining not just your oral health, but your overall well-being...',
    image: 'blog-1',
  },
  {
    id: 2,
    title: 'Everything You Need to Know About family bonds',
    slug: 'about-teeth-whitening',
    date: '2024-07-15',
    category: 'Cosmetic family',
    excerpt: 'Thinking about brightening your smile? Here’s a complete guide to professional family bonds options and what you can expect.',
    image: 'blog-2',
  },
  {
    id: 3,
    title: 'Tips for Your Child’s First family Visit',
    slug: 'childs-first-family-visit',
    date: '2024-07-08',
    category: 'Pediatric family',
    excerpt: 'Make your child’s first trip to the family a positive experience with these helpful tips for parents.',
    image: 'blog-3',
  },
];
