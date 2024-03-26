import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CustomLink from "./components/CustomLink";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="py-5 border-b border-gray-300">
          <ul className="flex gap-5">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/analytics">Analytic</CustomLink>
            </li>
            <li>
              <CustomLink path="/blogs">Blogs</CustomLink>
            </li>
            {/* <li>
              <CustomLink prefetch={false} path="/dashboard/settings">
                Settings
              </CustomLink>
            </li> */}
            <li>
              <CustomLink prefetch={false} path="/settings">
                Settings
              </CustomLink>
            </li>
            <li>
              <CustomLink path="/heavy">Heavy</CustomLink>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
