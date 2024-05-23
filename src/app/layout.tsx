import type { Metadata } from "next"
import { Bebas_Neue } from "next/font/google"
import "app/globals.css"

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "WAG",
  description: "Québec Cité Alt Rock",
  openGraph: { title: "WAG", description: "Québec Cité Alt Rock" },
  icons: { icon: "/favicon.ico" },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  )
}
