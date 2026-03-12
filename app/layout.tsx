import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pari Labs · AI Software & Business Automation",
  description: "Pari Labs builds reliable software platforms, automation systems, and SaaS solutions for modern organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
          {children}
        </div>
      </body>
    </html>
  );
}
