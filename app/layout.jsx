import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL("https://dmytrolamashevskyi.github.io"),
  title: {
    default: "Dmytro Lamashevskyi | Senior Software Engineer | .NET, AWS & Applied AI",
    template: "%s | Dmytro Lamashevskyi",
  },
  description:
    "Senior Software Engineer in Japan with 6+ years of commercial experience in .NET, AWS, distributed systems and business automation, plus applied AI prototypes and personal products.",
  keywords: [
    "Dmytro Lamashevskyi",
    "Senior Software Engineer",
    "Solution Architect",
    "Product Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Cloud Architecture",
    "Generative AI",
    "Unity",
    ".NET",
    "C#",
    "AWS",
    "React",
    "Japan",
  ],
  authors: [{ name: "Dmytro Lamashevskyi" }],
  openGraph: {
    title: "Dmytro Lamashevskyi | Senior Software Engineer | .NET, AWS & Applied AI",
    description:
      ".NET backend engineering, AWS, distributed systems and applied AI, supported by concrete project case studies.",
    url: "https://dmytrolamashevskyi.github.io",
    siteName: "Dmytro Lamashevskyi Portfolio",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Dmytro Lamashevskyi - Senior Software Engineer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dmytro Lamashevskyi | Senior Software Engineer | .NET, AWS & Applied AI",
    description: ".NET backend engineering, AWS, distributed systems and applied AI.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
