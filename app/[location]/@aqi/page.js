import AQIComponent from "@/components/AQIComponent"
import NoLocationFoundComponent from "@/components/NoLocationFoundComponent"
import { resolveLocationLatLng } from "@/lib/location-info"
import { getAQIInfo } from "@/lib/weather-info"

export default async function AQIPage({ params, searchParams }) {
  const { location } = await params
  const { latitude, longitude } = await searchParams

  const resolved = await resolveLocationLatLng(location, latitude, longitude)

  if (resolved && resolved.latitude && resolved.longitude) {
    return (
      <AQIComponent
        latitude={resolved.latitude}
        longitude={resolved.longitude}
      />
    )
  } else {
    return <NoLocationFoundComponent />
  }
}
