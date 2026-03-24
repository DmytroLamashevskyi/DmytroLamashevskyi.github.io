import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Dmytro Lamashevskyi | Software Developer",
  description:
    "Backend software engineer based in Japan. Specializing in C#, .NET, AWS and modern web technologies. 6+ years of experience building reliable systems.",
  keywords: [
    "Dmytro Lamashevskyi",
    "Software Developer",
    "Backend Engineer",
    ".NET",
    "C#",
    "AWS",
    "React",
    "Japan",
  ],
  authors: [{ name: "Dmytro Lamashevskyi" }],
  openGraph: {
    title: "Dmytro Lamashevskyi | Software Developer",
    description:
      "Backend software engineer based in Japan. Specializing in C#, .NET, AWS and modern web technologies.",
    url: "https://dmytrolamashevskyi.github.io",
    siteName: "Dmytro Lamashevskyi Portfolio",
    locale: "en_US",
    type: "website",
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
