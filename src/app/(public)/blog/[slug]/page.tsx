import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BlogSidebar } from "@/components/blog-sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, Folder, Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.image);
  const tags = ["Familly bonds", "Oral Health"];

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <CardContent className="p-0">
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
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
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
                    <Link href="#" className="hover:text-primary">
                      {post.category}
                    </Link>
                  </div>
                </div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
                  {post.title}
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Curabitur pretium tincidunt lacus. Nulla gravida orci a
                    odio. Nullam varius, turpis et commodo pharetra, est eros
                    bibendum elit, nec luctus magna felis sollicitudin mauris.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    "The best way to predict the future is to create it. Regular
                    fammily visits are not just about fixing problems, but
                    preventing them."
                  </blockquote>
                  <p>
                    Integer in mauris eu nibh euismod gravida. Duis ac tellus et
                    risus vulputate vehic pellentesque. Morbi sit amet nulla sed
                    dolor elementium imperdiet. Quisque fermentum. Aliquam lorem
                    ante, dapibus in, viverra quis, feugiat a, tellus.
                  </p>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <Tag className="w-4 h-4" />
                    <span>Tags:</span>
                  </div>
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" asChild>
                      <Link href="#">{tag}</Link>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
