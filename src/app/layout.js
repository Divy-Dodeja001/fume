import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import AnimatedLayout from "./components/AnimatedLayout";

const inter = Inter({ subsets: ["latin"] });

const georgia = localFont({
  src: "./fonts/georgia.ttf",
  variable: "--font-georgia",
});

export const metadata = {
  title: "Fume",
  description:
    "Premium shisha, curated cocktails and unforgettable nights, surrounded by deep beats, moody lights, and moments that linger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
