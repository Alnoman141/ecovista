import LocationComponent from "@/components/LocationComponent";

export default async function LocationPage({ params, searchParams }) {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;
    return (
        <LocationComponent latitude={latitude} longitude={longitude} />
    );
}