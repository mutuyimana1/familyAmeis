import Link from "next/link"
import { List, PlusCircle, LayoutGrid, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { blogPosts } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function DashboardBlogsPage() {
  return (
    <Tabs defaultValue="grid">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="grid" className="hidden sm:flex">
            <LayoutGrid className="h-4 w-4 mr-2" />
            Grid
          </TabsTrigger>
          <TabsTrigger value="list">
            <List className="h-4 w-4 mr-2" />
            List
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="gap-1">
            <Link href="/dashboard/blogs/create">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Create Blog Post
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <TabsContent value="grid">
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage your blog posts here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {blogPosts.map((post) => {
                const postImage = PlaceHolderImages.find(p => p.id === post.image);
                return (
                  <Card key={post.id}>
                    {postImage && (
                       <div className="relative aspect-video">
                        <Image
                          alt={post.title}
                          className="object-cover rounded-t-lg"
                          src={postImage.imageUrl}
                          data-ai-hint={postImage.imageHint}
                          fill
                        />
                      </div>
                    )}
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground truncate">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="list">
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage your blog posts here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{post.category}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{post.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
