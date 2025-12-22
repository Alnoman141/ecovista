import Image from "next/image"
import Card from "./Card"
import { getTemperatureInfo } from "@/lib/weather-info"

export default async function TemperatureComponent({ latitude, longitude }) {
  const {temp, feels_like} = await getTemperatureInfo(latitude, longitude)

  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_tempareture.png"
          height={30}
          width={30}
          alt="rain icon"
        />
        <h3 className="feature-title">{temp}°C</h3>

        <span className="feature-name">Feels Like {feels_like}°C</span>
      </div>
    </Card>
  )
}
