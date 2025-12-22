import TemperatureComponent from "@/components/TemperatureComponent";

export default async function TemparaturePage({params, searchParams}) {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;
    return (
        <TemperatureComponent latitude={latitude} longitude={longitude} />
    );
}