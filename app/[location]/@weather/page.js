import NoLocationFoundComponent from "@/components/NoLocationFoundComponent"
import WeatherComponent from "@/components/WeatherComponent"
import { resolveLocationLatLng } from "@/lib/location-info"

export default async function WeatherPage({ params, searchParams }) {
  const { location } = await params
  const { latitude, longitude } = await searchParams

  const resolved = await resolveLocationLatLng(location, latitude, longitude)

  if (resolved && resolved.latitude && resolved.longitude) {
    return (
      <WeatherComponent
        latitude={resolved.latitude}
        longitude={resolved.longitude}
      />
    )
  } else {
    return <NoLocationFoundComponent />
  }
}
