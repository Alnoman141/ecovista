import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import Image from "next/image"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Ecovista",
  description: "A weather and location information app",
}

export default function RootLayout({
  children,
  aqi,
  weather,
  temperature,
  wind,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/images/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="Background Image"
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  )
}
