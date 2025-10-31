import Link from "next/link"
import { PlusCircle, List, LayoutGrid } from "lucide-react"

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

export default function DashboardNewsPage() {
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
            <Link href="/dashboard/news/create">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Create News
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <TabsContent value="grid">
        <Card>
          <CardHeader>
            <CardTitle>News</CardTitle>
            <CardDescription>Manage your news articles here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center h-48 flex items-center justify-center">
              No news articles yet.
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="list">
        <Card>
          <CardHeader>
            <CardTitle>News</CardTitle>
            <CardDescription>Manage your news articles here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                    <TableCell colSpan={3} className="text-center h-24">
                        No news articles yet.
                    </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
