import { getLocationByName } from "../location-utils";

export async function GET(request, { params }) {
    const { name } = await params;

    const location = getLocationByName(name);

    return Response.json(location);
}