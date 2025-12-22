"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import Image from "next/image"

export default function LocationDetector() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    const params = new URLSearchParams(searchParams)

    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser")
      setLoading(false)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        params.set("latitude", position.coords.latitude)
        params.set("longitude", position.coords.longitude)
        setLoading(false)

        router.push(`/current?${params.toString()}`)
      },
      (error) => {
        console.log("Error getting location:", error)
        setLoading(false)
      }
    )
  }, [pathname, searchParams])

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/images/network.gif"
            alt="Loading..."
            height={500}
            width={500}
            className="border rounded-md my-4"
          />
          <p className="text-4xl text-center">Detecting Location...</p>
        </>
      )}
    </div>
  )
}
