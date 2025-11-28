import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Calendar, Folder, MessageSquare } from 'lucide-react';
import { BlogSidebar } from '@/components/blog-sidebar';

export default function BlogPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {blogPosts.map((post) => {
              const postImage = PlaceHolderImages.find(p => p.id === post.image);
              return (
                <div key={post.id} className="bg-card p-6 rounded-lg shadow-md flex flex-col">
                  {postImage && (
                    <div className="relative aspect-video mb-6">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                        data-ai-hint={postImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>By Admin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {format(new Date(post.date), "MMMM d, yyyy")}
                      </time>
                    </div>
                     <div className="flex items-center gap-2">
                        <Folder className="w-4 h-4" />
                        <span>{post.category}</span>
                    </div>
                  </div>
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button asChild className="self-start">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
