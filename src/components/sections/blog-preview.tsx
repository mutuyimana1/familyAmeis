import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogPreviewSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay informed with the latest news, tips, and insights on family health from our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => {
            const postImage = PlaceHolderImages.find(p => p.id === post.image);
            return (
              <Card key={post.id} className="group overflow-hidden flex flex-col">
                {postImage && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={postImage.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={postImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 bg-muted-foreground rounded-full"></span>
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                  </div>
                   <h3 className="font-headline text-xl font-semibold text-primary pt-2">
                     <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
                       {post.title}
                     </Link>
                   </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                    <Button variant="link" asChild className="p-0 h-auto">
                        <Link href={`/blog/${post.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
