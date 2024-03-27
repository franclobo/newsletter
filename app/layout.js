import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "CNewsletter subscription",
  description: "Subscribe to our newsletter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
