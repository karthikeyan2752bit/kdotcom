import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pari Labs · Business Software & IT Solutions",
  description: "Pari Labs builds business software and IT systems that automate operations, improve efficiency, and support growth.",
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
