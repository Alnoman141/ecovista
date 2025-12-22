import AQIComponent from "@/components/AQIComponent"
import { getAQIInfo } from "@/lib/weather-info"

export default async function AQIPage({ params, searchParams }) {
  const { location } = await params
  const { latitude, longitude } = await searchParams

  return <AQIComponent latitude={latitude} longitude={longitude} />
}
