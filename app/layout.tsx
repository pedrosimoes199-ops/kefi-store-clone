import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Kefi Fashion Store",
    description: "Modern fashion basics for everyday elegance.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="pt">
                <head>
                        <script src="https://unpkg.com/@phosphor-icons/web" async />
                </head>head>
                <body className={`${inter.variable} ${playfair.variable} font-sans`}>
                  {children}
                </body>body>
          </html>html>
        );
}
</html>
