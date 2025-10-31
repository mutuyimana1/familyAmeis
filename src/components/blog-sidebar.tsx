"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts, doctors } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [...new Set(blogPosts.map((p) => p.category))];
const tags = [
  "Familly bonds",
  "Oral Health",
  "Whitening",
  "Implants",
  "Orthodontics",
  "Pediatric",
];

export function BlogSidebar() {
  const author = doctors[0];
  const authorImage = PlaceHolderImages.find((p) => p.id === author.image);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="font-headline text-xl font-bold text-primary mb-4">
          Search
        </h3>
        <div className="relative">
          <Input placeholder="Search..." className="pr-10" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* About Author */}
      {author && authorImage && (
        <div className="bg-card p-6 rounded-lg shadow-md text-center">
          <Image
            src={authorImage.imageUrl}
            alt={author.name}
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4"
            data-ai-hint={authorImage.imageHint}
          />
          <h3 className="font-headline text-xl font-bold text-primary">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {author.specialty}
          </p>
          <p className="text-sm text-muted-foreground">
            Dr. Taylor is a passionate family dedicated to providing the best
            care for her patients.
          </p>
        </div>
      )}

      {/* Categories */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="font-headline text-xl font-bold text-primary mb-4">
          Categories
        </h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href="#"
                className="flex justify-between items-center text-muted-foreground hover:text-primary group"
              >
                <span>{category}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="font-headline text-xl font-bold text-primary mb-4">
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => {
            const postImage = PlaceHolderImages.find(
              (p) => p.id === post.image
            );
            return (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-4 group"
                >
                  {postImage && (
                    <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                        data-ai-hint={postImage.imageHint}
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-primary group-hover:text-primary/80 transition-colors text-sm leading-snug">
                      {post.title}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Archive */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="font-headline text-xl font-bold text-primary mb-4">
          Archives
        </h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024-07">July 2024</SelectItem>
            <SelectItem value="2024-06">June 2024</SelectItem>
            <SelectItem value="2024-05">May 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tags */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="font-headline text-xl font-bold text-primary mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button key={tag} variant="outline" size="sm" asChild>
              <Link href="#">{tag}</Link>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
