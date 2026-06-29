import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Apex MMA | Professional Martial Arts — Riverside, CA",
  description:
    "BJJ, Muay Thai, Wrestling, and MMA Striking in Riverside, CA. Structured curriculum for all levels. No ego. Free trial class.",
  keywords: [
    "martial arts Riverside",
    "BJJ Riverside",
    "Muay Thai classes",
    "MMA gym CA",
    "wrestling training",
    "beginner martial arts",
  ],
  openGraph: {
    title: "Apex MMA",
    description: "Professional martial arts training in Riverside, CA.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ExerciseGym", "SportsActivityLocation"],
  name: "Apex MMA",
  url: "https://apexmma.com",
  telephone: "+19515550147",
  email: "info@apexmma.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Industrial Avenue, Unit 4",
    addressLocality: "Riverside",
    addressRegion: "CA",
    postalCode: "92501",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.9806,
    longitude: -117.3755,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "15:30",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    {
      "@type": "LocationFeatureSpecification",
      name: "Changing Rooms",
      value: true,
    },
    { "@type": "LocationFeatureSpecification", name: "Showers", value: true },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
  ],
  sport: [
    "Brazilian Jiu-Jitsu",
    "Muay Thai",
    "Wrestling",
    "Mixed Martial Arts",
  ],
  offers: {
    "@type": "Offer",
    name: "Free Trial Class",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    description:
      "One free Fundamentals class for new members. No credit card required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
