import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input"
import { useDispatch, useSelector } from "react-redux"
import { setBasicData } from "@/features/BasicSlice"
import { useMemo, useState } from "react"

const SearchFilter = () => {
  const { originalData } = useSelector((state) => state.basic)
  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  const roles = useMemo(() => {
    return Array.from(new Set(originalData.map((m) => m.role)))
  }, [originalData])

  const applyFilters = (name = searchQuery, role = selectedRole) => {
    let filtered = originalData

    if (name.length >= 2) {
      filtered = filtered.filter((member) =>
        member.name.toLowerCase().includes(name.toLowerCase())
      )
    }

    if (role !== "all") {
      filtered = filtered.filter((member) => member.role === role)
    }

    dispatch(setBasicData(filtered))
  }

  const handleSearch = (e) => {
    const name = e.target.value
    setSearchQuery(name)

    if (name.length === 0 || name.length >= 2) {
      applyFilters(name, selectedRole)
    }
  }

  const handleRoleFilter = (role) => {
    setSelectedRole(role)
    applyFilters(searchQuery, role)
  }

  return (
    <div className="flex space-x-3 py-3 px-3 rounded-md border-1 bg-gray-100">
      <Input
        className="bg-white"
        placeholder="Search by name..."
        onChange={handleSearch}
      />
      <Select onValueChange={handleRoleFilter} defaultValue="all">
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Filter by Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          {roles.map((role, index) => (
            <SelectItem key={index} value={role}>
              {role}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SearchFilter


// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select"
// import { members } from "@/data/members"

// export function SearchFilter({
//   search,
//   setSearch,
//   role,
//   setRole,
// }: {
//   search: string
//   setSearch: (val: string) => void
//   role: string
//   setRole: (val: string) => void
// }) {
//   const roles = Array.from(new Set(members.map((m) => m.role))).sort()

//   return (
//     <div className="grid gap-3 sm:grid-cols-2">
//       <Input
//         placeholder="Search by name..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <Select value={role} onValueChange={setRole}>
//         <SelectTrigger>
//           <SelectValue placeholder="Select role" />
//         </SelectTrigger>
//         <SelectContent>
//        <SelectItem value="all">All Roles</SelectItem>
//           {roles.map((r) => (
//             <SelectItem key={r} value={r}>
//               {r}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   )
// }
