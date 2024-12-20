import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/../ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "deptachris.de",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen overflow-x-hidden flex flex-col items-center">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
