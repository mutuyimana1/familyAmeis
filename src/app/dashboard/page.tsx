import Link from "next/link";
import { Activity, ArrowUpRight, Newspaper, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        <Card>
          <Link href="/dashboard/blogs">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <Pencil className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Total blog posts</p>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/dashboard/news">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                News Articles
              </CardTitle>
              <Newspaper className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                Total news articles
              </p>
            </CardContent>
          </Link>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Recent updates to your content.</CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="/dashboard/blogs">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Type</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">
                    The Importance of Regular family Check-ups
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  Blog Post
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  2024-07-22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">
                    Everything You Need to Know About family bonds
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  Blog Post
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  2024-07-15
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">
                    Tips for Your Child’s First family Visit
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  Blog Post
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  2024-07-08
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
