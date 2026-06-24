import { Outfit, Ovo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const serif = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Akhil S Vijay — Forward Deployed Engineer",
  description:
    "Forward Deployed Engineer & full-stack/data engineer. I embed with customers and turn ambiguous, high-stakes problems into production systems — fast.",
  keywords: [
    "Forward Deployed Engineer",
    "FDE",
    "Full Stack Engineer",
    "Data Engineer",
    "Python",
    "Django",
    "React",
    "Next.js",
    "Akhil S Vijay",
  ],
  openGraph: {
    title: "Akhil S Vijay — Forward Deployed Engineer",
    description:
      "I embed with customers and turn ambiguous, high-stakes problems into production systems — fast.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased overflow-x-hidden bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
