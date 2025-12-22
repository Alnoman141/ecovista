const locations = [
  { name: "New York", latitude: 40.7128, longitude: -74.006 },
  // { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  // { name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  // { name: "Houston", latitude: 29.7604, longitude: -95.3698 },
  // { name: "Phoenix", latitude: 33.4484, longitude: -112.074 },
  { name: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { name: "London", latitude: 51.5074, longitude: -0.1278 },
  { name: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
  { name: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  // { name: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  // { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
  // { name: "Berlin", latitude: 52.52, longitude: 13.405 },
  // { name: "Moscow", latitude: 55.7558, longitude: 37.6173 },
  // { name: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },
  // { name: "Toronto", latitude: 43.65107, longitude: -79.347015 },
  // { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  // { name: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  // { name: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  // { name: "Dubai", latitude: 25.2048, longitude: 55.2708 },
  // { name: "Johannesburg", latitude: -26.2041, longitude: 28.0473 },
  // { name: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
  // { name: "Madrid", latitude: 40.4168, longitude: -3.7038 },
  // { name: "Rome", latitude: 41.9028, longitude: 12.4964 },
  // { name: "Seoul", latitude: 37.5665, longitude: 126.978 },
  // { name: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
  // { name: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
  // { name: "Amsterdam", latitude: 52.3676, longitude: 4.9041 },
  // { name: "Vienna", latitude: 48.2082, longitude: 16.3738 },
  // { name: "Lisbon", latitude: 38.7223, longitude: -9.1393 },
  // { name: "Prague", latitude: 50.0755, longitude: 14.4378 },
  // { name: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
  // { name: "Budapest", latitude: 47.4979, longitude: 19.0402 },
  // { name: "Copenhagen", latitude: 55.6761, longitude: 12.5683 },
  // { name: "Helsinki", latitude: 60.1695, longitude: 24.9354 },
  // { name: "Oslo", latitude: 59.9139, longitude: 10.7522 },
  // { name: "Stockholm", latitude: 59.3293, longitude: 18.0686 },
  // { name: "Dublin", latitude: 53.3498, longitude: -6.2603 },
  // { name: "Edinburgh", latitude: 55.9533, longitude: -3.1883 },
  // { name: "Vancouver", latitude: 49.2827, longitude: -123.1207 },
  // { name: "Montreal", latitude: 45.5017, longitude: -73.5673 },
  // { name: "Calgary", latitude: 51.0447, longitude: -114.0719 },
  // { name: "Ottawa", latitude: 45.4215, longitude: -75.6999 },
  // { name: "Edmonton", latitude: 53.5461, longitude: -113.4938 },
  { name: "Kalkutta", latitude: 22.5726, longitude: 88.3639 },
  { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  // { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
  { name: "Barisal", latitude: 22.701, longitude: 90.3535 },
  { name: "Chittagong", latitude: 22.3569, longitude: 91.7832 },
  { name: "Khulna", latitude: 22.8456, longitude: 89.5403 },
]

export function getLocationByName(name) {
  if (!name) return null
  return locations.find(
    (location) => location.name.toLowerCase() === name.toLowerCase()
  ) || {}
}

export function getAllLocations() {
  return locations
}
