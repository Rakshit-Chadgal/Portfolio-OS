import "./globals.css";

import MouseGlow from "@/components/layout/MouseGlow";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import GridBackground from "@/components/layout/GridBackground";
import CursorTrail from "@/components/layout/CursorTrail";

export const metadata = {
  title: "Rakshit Chadgal | AI & ML Developer",
  description:
    "Portfolio of Rakshit Chadgal showcasing AI, Machine Learning, Web Development and Projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
    lang="en"
    className="h-full antialiased"
  >
    <body className="min-h-screen">
      <ThemeProvider>
        <GridBackground />
        <MouseGlow />
        <CursorTrail />
        {children}
      </ThemeProvider>
    </body>
  </html>
);
}
