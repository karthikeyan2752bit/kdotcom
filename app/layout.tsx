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
        <div className="relative z-0 min-h-screen bg-transparent text-slate-100 transition-colors duration-300">
          {children}
        </div>
      </body>
    </html>
  );
}
