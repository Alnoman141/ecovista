import LocationComponent from "@/components/LocationComponent"
import NoLocationFoundComponent from "@/components/NoLocationFoundComponent"
import { resolveLocationLatLng } from "@/lib/location-info"

export default async function LocationPage({ params, searchParams }) {
  const { location } = await params
  const { latitude, longitude } = await searchParams
  const resolved = await resolveLocationLatLng(location, latitude, longitude)

  if (resolved && resolved.latitude && resolved.longitude) {
    return (
      <LocationComponent
        latitude={resolved.latitude}
        longitude={resolved.longitude}
      />
    )
  } else {
    return <NoLocationFoundComponent />
  }
}
