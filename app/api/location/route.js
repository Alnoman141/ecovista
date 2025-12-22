import { getAllLocations } from "./location-utils";

export async function GET() {
    const locations = getAllLocations();

    return Response.json({ locations });
}