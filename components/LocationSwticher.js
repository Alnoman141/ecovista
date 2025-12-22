"use client"

import { getAllLocationLists } from "@/lib/location-info"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function LocationSwitcher() {
  const [showLocationList, setShowLocationList] = useState(false)
  const [locations, setLocations] = useState([])

  const handleClick = () => {
    setShowLocationList(!showLocationList)
  }

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { locations } = await getAllLocationLists()
        setLocations(locations)
      } catch (error) {
        console.error("Error fetching locations:", error)
      }
    }
    fetchLocations()
  }, [])

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <Image
          className="size-9"
          src="/icons/link.svg"
          alt="link icon"
          height={20}
          width={20}
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((location) => (
              <li key={location.name} className="text-sm text-gray-700">
                <Link href={`/${location.name}?latitude=${location.latitude}&longitude=${location.longitude}`}>
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
