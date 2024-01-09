import { fetchRevenue } from "../lib/data"

export default async function DashboardPage() {
  const revenue = await fetchRevenue()
  console.log(revenue)

  return (
    <div>
        <p>
          Welcome to Dashboard
        </p>
    </div>
  )
}
