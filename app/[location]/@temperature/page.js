import NoLocationFoundComponent from "@/components/NoLocationFoundComponent"
import TemperatureComponent from "@/components/TemperatureComponent"
import { resolveLocationLatLng } from "@/lib/location-info"

export default async function TemparaturePage({ params, searchParams }) {
  const { location } = await params
  const { latitude, longitude } = await searchParams

  const resolved = await resolveLocationLatLng(location, latitude, longitude)

  if (resolved && resolved.latitude && resolved.longitude) {
    return (
      <TemperatureComponent
        latitude={resolved.latitude}
        longitude={resolved.longitude}
      />
    )
  } else {
    return <NoLocationFoundComponent />
  }
}
