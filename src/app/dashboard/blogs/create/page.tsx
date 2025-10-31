"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function CreateBlogPage() {
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission to a backend
    toast({
      title: "Blog Post Created!",
      description: "Your new blog post has been saved.",
    })
    router.push("/dashboard/blogs")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Blog Post</CardTitle>
        <CardDescription>Fill out the form below to create a new blog post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              className="w-full"
              placeholder="Blog Post Title"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              type="text"
              className="w-full"
              placeholder="e.g., Family Health"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              placeholder="A short summary of the blog post..."
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write the full blog post content here..."
              className="min-h-48"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Save Post</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
