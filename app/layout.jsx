import {
  Marcellus,
  Prata,
  Josefin_Sans,
  Gilda_Display,
  Chivo,
  Sofia,
} from "next/font/google";

import Providers from "@/components/Providers";
import BackToTop from "@/components/BackToTop";

import "./globals.css";
import "@/assets/font/flaticon_mavoo.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/swiper-bundle.min.css";
import "@/assets/css/magnific-popup.css";
// import "@/assets/css/odometer.min.css";
import "@/assets/css/sal.css";
import "@/assets/css/animate.css";
import "@/assets/css/style.css";
import "@/assets/css/mavo-spacing.css";
import "@/assets/css/responsive.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const josefin_sans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const gilda_display = Gilda_Display({
  variable: "--font-gilda-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
const sofia = Sofia({
  variable: "--font-sofia",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Mavoo - An eCommerce Template",
  description: "Mavoo - An eCommerce Template With NextJs, ReduxToolkit",
  keywords: [
    "shop",
    "ecommerce",
    "html5",
    "css",
    "bootstrap",
    "js",
    "jewellery",
    "watch",
    "bag",
    "shoes",
    "clothing",
    "tailwind",
    "tailwind v4",
    "nextjs",
    "nextjs 15",
    "nextjs app router",
    "reactjs",
    "reactjs 19",
    "redux toolkit",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${prata.variable} ${josefin_sans.variable} ${gilda_display.variable} ${chivo.variable} ${sofia.variable} antialiased`}
      >
        <Providers>
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
