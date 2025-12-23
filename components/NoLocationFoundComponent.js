import Link from "next/link"
import Card from "./Card"

export default function NoLocationFoundComponent() {
  return (
    <>
      <Card>
        <h3>No location found.</h3>
        <Link className="underline" href="/">Go back to Home Page</Link>
      </Card>
    </>
  )
}
