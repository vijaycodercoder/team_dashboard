import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input"

const SearchFilter = () => {
  return (
    <div className="flex space-x-3 py-3 px-3 rounded-md border-1 bg-gray-100">
      <Input
      className=" bg-white"
      placeholder="Search by name..."
      />

      <Select>
  <SelectTrigger className="w-[180px] bg-white">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
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
