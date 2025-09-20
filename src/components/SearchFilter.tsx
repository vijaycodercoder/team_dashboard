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
  const { originalData } = useSelector((state:any) => state.basic)
  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  const roles = useMemo(() => {
    return Array.from(new Set(originalData.map((m: { role: any }) => m.role)))
  }, [originalData])

  const applyFilters = (name = searchQuery, role = selectedRole) => {
    let filtered = originalData

    if (name.length >= 2) {
      filtered = filtered.filter((member: { name: string }) =>
        member.name.toLowerCase().includes(name.toLowerCase())
      )
    }

    if (role !== "all") {
      filtered = filtered.filter((member: { role: string }) => member.role === role)
    }

    dispatch(setBasicData(filtered))
  }

  const handleSearch = (e: { target: { value: any } }) => {
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
    <div className="flex space-x-3 py-3 px-3 rounded-md border-1 bg-gray-100 ">
      <Input
        className="bg-white text-gray-900"
        placeholder="Search by name..."
        onChange={handleSearch}
      />
      <Select onValueChange={handleRoleFilter} defaultValue="all">
        <SelectTrigger className="w-[180px] bg-white text-gray-900">
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

