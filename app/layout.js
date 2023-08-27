import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gecko's AI Demo",
  description:
    "For an example of what AI-handled conversations could look like for your institution, try our interactive widget.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
