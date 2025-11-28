import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={cn(
          "min-h-screen bg-background font-body antialiased flex flex-col"
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
  );
}
