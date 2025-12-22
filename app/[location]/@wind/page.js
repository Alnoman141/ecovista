import WindComponent from "@/components/WindComponent"

export default async function WindPage({ params, searchParams }) {
  const { location } = await params
  const { latitude, longitude } = await searchParams
  return <WindComponent latitude={latitude} longitude={longitude} />
}
