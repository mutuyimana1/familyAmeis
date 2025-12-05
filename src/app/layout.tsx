import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

export const metadata: Metadata = {
  title: "AMIS DE LA FAMILLE AU RWANDA",
  description: "Top-quality Familly bonds with the latest technology.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const messages = await getMessages();
const locale=await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased flex flex-col"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <main className="flex-grow">
            {children}
          </main>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}