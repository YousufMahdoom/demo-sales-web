import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEMO SALES WEB | Suzuki Wagon R & Japanese Import Dealer Kurunegala",
  description:
    "Sri Lanka's trusted dealer for Suzuki Wagon R FX, FZ, Stingray, and premium Japanese vehicle imports in Kurunegala. 100% verified auction sheets.",
  keywords: [
    "Suzuki Wagon R Sri Lanka",
    "Japanese import cars Kurunegala",
    "Wagon R FX FZ Stingray",
    "demo sales web",
    "used cars Kurunegala",
  ],
  openGraph: {
    type: "website",
    title: "DEMO SALES WEB | Premium Japanese Vehicles",
    description:
      "Sri Lanka's trusted dealer for Suzuki Wagon R and premium Japanese imports.",
    images: ["/images/wagonr-stingray.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
