import { useMemo, useState } from "react"
import type  { Member } from "@/data/members"
import  { members as seed,} from "@/data/members"
import { MemberCard } from "@/components/MemberCard"
import { MemberModal } from "@/components/MemberModal"
import { SearchFilter } from "@/components/SearchFilter"

export default function Dashboard_old() {
  const [search, setSearch] = useState("")
  const [role, setRole] = useState("")
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Member | null>(null)

const filtered = useMemo(() => {
  const q = search.toLowerCase()
  return seed.filter((m) =>
    (role === "all" || m.role === role) &&
    (!q || m.name.toLowerCase().includes(q))
  )
}, [search, role])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b p-4">
        <h1 className="text-lg font-semibold">Team Dashboard</h1>
      </header>

      <main className="container py-6 space-y-6">
        <SearchFilter search={search} setSearch={setSearch} role={role} setRole={setRole} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <MemberCard key={m.id} member={m} onClick={() => {
              setActive(m)
              setOpen(true)
            }} />
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground">No members match filters.</p>
          )}
        </div>
      </main>

      <MemberModal open={open} onOpenChange={setOpen} member={active} />
    </div>
  )
}
