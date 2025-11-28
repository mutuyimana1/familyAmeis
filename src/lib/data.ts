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
    title: 'Counseling Services',
    description: 'Personalized mental health support tailored to meet your unique needs and goal.',
    slug: 'general-family',
  },
  {
    icon: WhiteningIcon,
    title: 'Marriage and Family Therapy',
    description: 'Therapy sessions aimed at improving family dynamics and resolving conflicts within relationships.',
    slug: 'teeth-whitening',
  },
  {
    icon: DentalImplantIcon,
    title: 'Psychoeducation',
    description: 'Learn to affirm Each other in the family, Lear to encourage family.',
    slug: 'family-implants',
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
    title: 'Mugore menya kurimbira umugabo wawe',
    slug: 'regular-family-check-ups',
    date: '2024-07-22',
    category: 'family Health',
    excerpt:" Muri kamere y'umugabo habamo gushaka gusa neza igihe cyose,kugirango...",
    image: 'blog-1',
  },
  {
    id: 2,
    title: 'Shishoza utaba ukabya gufuha',
    slug: 'about-teeth-whitening',
    date: '2024-07-15',
    category: 'Cosmetic family',
    excerpt: 'Hari abantu bafuhira abo bashakanye kugeza ubwo umuntu atemerewe gusuhuza ...',
    image: 'blog-2',
  },
  {
    id: 3,
    title: 'Impamvu zitera bamwe mubashakanye kugira umubabaro',
    slug: 'childs-first-family-visit',
    date: '2024-07-08',
    category: 'Pediatric family',
    excerpt: 'Har bamwe mubashakanye bahorana agahinda bakomra kubo bashakanye! Ese birakwiye kumva ko uwo...',
    image: 'blog-3',
  },
];
