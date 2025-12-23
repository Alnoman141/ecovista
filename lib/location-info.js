const getLocationData = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching location data:", error.message);
        return null;
    }
}

const getAllLocationLists = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/location');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching location lists:", error.message);
        return null;
    }
}

const getALocationByName = async (locationName) => {
    try {
        const response = await fetch(`http://localhost:3000/api/location/${locationName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching location by name:", error.message);
        return null;
    }
}

const resolveLocationLatLng = async (location, latitude, longitude) => {
    if (latitude && longitude) {
        return { latitude, longitude };
    }

    const locationData = await getALocationByName(location);
    if (locationData && locationData.latitude && locationData.longitude) {
        return { latitude: locationData.latitude, longitude: locationData.longitude };
    }
}

export { getLocationData, getAllLocationLists, getALocationByName, resolveLocationLatLng }