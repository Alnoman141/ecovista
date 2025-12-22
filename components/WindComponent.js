import Image from "next/image"
import Card from "./Card"
import { getWindInfo } from "@/lib/weather-info"

export default async function WindComponent({ latitude, longitude }) {
  const { speed, deg } = await getWindInfo(latitude, longitude)

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_wind.png"
          alt="wind icon"
          height={30}
          width={30}
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </Card>
  )
}
