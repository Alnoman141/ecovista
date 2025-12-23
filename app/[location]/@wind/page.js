import NoLocationFoundComponent from "@/components/NoLocationFoundComponent"
import WindComponent from "@/components/WindComponent"
import { resolveLocationLatLng } from "@/lib/location-info"

export default async function WindPage({ params, searchParams }) {
  const { location } = await params
  const { latitude, longitude } = await searchParams

  const resolved = await resolveLocationLatLng(location, latitude, longitude)

  if (resolved && resolved.latitude && resolved.longitude) {
    return (
      <WindComponent
        latitude={resolved.latitude}
        longitude={resolved.longitude}
      />
    )
  } else {
    return <NoLocationFoundComponent />
  }
}
