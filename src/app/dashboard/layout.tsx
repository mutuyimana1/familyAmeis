"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  // Get readable title from route
  const routeTitle =
    pathname === "/dashboard"
      ? "Dashboard"
      : pathname.split("/").slice(-1)[0]?.replace(/^\w/, (c) => c.toUpperCase())

  const handleLogout = () => {
    // Example: add real logout logic here
    console.log("User logged out")
    router.push("/") // redirect to homepage or login
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content area */}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        {/* Header */}
        <header className="flex items-center justify-between border-b bg-white px-6 py-3 shadow-sm">
          <h1 className="text-lg font-semibold tracking-tight text-gray-800">
            {routeTitle || "Dashboard"}
          </h1>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </header>

        {/* Page content */}
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  )
}
