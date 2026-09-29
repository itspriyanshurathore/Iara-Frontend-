import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { UserProvider } from "@/context/userContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iara Publication",
  description: "We publish with heart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Script
        id="ACXConnectScript"
        type="text/javascript"
        src="https://app.sendmails.io/websites/67d29ad9aaf07/connect.js"
      >
      </Script> */}

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="ACXConnectScript"
          strategy="beforeInteractive"
          src="https://app.sendmails.io/websites/67d29ad9aaf07/connect.js"
        />

        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}