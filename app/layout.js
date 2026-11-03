import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "VaultofCodes — EdTech Innovation Meets Enterprise Software & SaaS",
  description:
    "Learn technology. Build with technology. Experience technology. VaultofCodes unites industry-grade engineering cohorts with proprietary developer SaaS tools.",
  keywords: [
    "VaultofCodes",
    "EdTech",
    "Software Engineering",
    "SaaS",
    "Web Development",
    "AI & Prompt Engineering",
    "Cybersecurity",
    "VaultVerify",
    "VaultCareer",
    "VaultHire",
    "Tech Internships"
  ],
  authors: [{ name: "VaultofCodes", url: "https://vaultofcodes.com" }],
  openGraph: {
    title: "VaultofCodes — Learn, Build & Experience Technology",
    description:
      "A modern developer ecosystem combining hands-on technical training with proprietary enterprise SaaS tools.",
    type: "website",
    locale: "en_US",
    siteName: "VaultofCodes",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultofCodes — Learn, Build & Experience Technology",
    description:
      "A modern developer ecosystem combining hands-on technical training with proprietary enterprise SaaS tools.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#05070E] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
