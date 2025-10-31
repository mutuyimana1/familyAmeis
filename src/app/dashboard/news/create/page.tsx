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

export default function CreateNewsPage() {
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission to a backend
    toast({
      title: "News Article Created!",
      description: "Your new news article has been saved.",
    })
    router.push("/dashboard/news")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New News Article</CardTitle>
        <CardDescription>Fill out the form below to create a new news article.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              className="w-full"
              placeholder="News Article Title"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write the news article content here..."
              className="min-h-48"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Save Article</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
