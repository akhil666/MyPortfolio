import { Space_Grotesk, JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata = {
  title: "Akhil S Vijay — Forward Deployment Engineer",
  description:
    "Forward Deployment Engineer & full-stack data professional. I deploy scalable web apps, AI-enabled platforms, and analytics solutions into client environments.",
  keywords: [
    "Forward Deployment Engineer",
    "Full Stack Developer",
    "Data Engineer",
    "Python",
    "Django",
    "React",
    "Next.js",
    "Databricks",
    "Akhil S Vijay",
  ],
  openGraph: {
    title: "Akhil S Vijay — Forward Deployment Engineer",
    description:
      "I deploy scalable web apps, AI-enabled platforms, and analytics solutions into client environments.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${space.variable} ${mono.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
