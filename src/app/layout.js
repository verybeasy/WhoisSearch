import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NETDUMP",
  description: "WHOIS Search Engine",
  icons: {icon: [{url: '/'}]}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          bg-slate-800 font-mono
          ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
