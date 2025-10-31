import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  imageUrl: string;
  imageHint: string;
}

export default function PageHeader({ title, breadcrumb, imageUrl, imageHint }: PageHeaderProps) {
  const image = PlaceHolderImages.find(p => p.id === 'page-header');
  const finalImageUrl = image ? image.imageUrl : imageUrl;
  const finalImageHint = image ? image.imageHint : imageHint;


  return (
    <div className="relative h-64 bg-primary">
      <Image
        src={finalImageUrl}
        alt={title}
        fill
        className="object-cover"
        data-ai-hint={finalImageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">{title}</h1>
        <div className="flex items-center gap-2 mt-4 text-lg">
          <Link href="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="h-5 w-5" />
          <span>{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
