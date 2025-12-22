import Image from "next/image"
import Card from "./Card"
import { getWeatherInfo } from "@/lib/weather-info"

export default async function WeatherComponent({ latitude, longitude }) {
    const {main, description } = await getWeatherInfo(latitude, longitude)
  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_rain.png"
          alt="rain icon"
          height={30}
          width={30}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  )
}
