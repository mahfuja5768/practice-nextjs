import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <nav className="py-5 border-b border-gray-300">
          <ul className="flex gap-5">
            <li>
              <Link href=''>Home</Link>
            </li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        {children}</body>
    </html>
  );
}
