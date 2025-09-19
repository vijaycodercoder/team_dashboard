import { useMemo, useState } from "react"

// Mock data types and components for demonstration
const seed = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    role: "Frontend Developer", 
    status: "Active", 
    bio: "Passionate about creating beautiful user interfaces with React and modern CSS. Always excited to learn new technologies.",
    email: "alex@company.com",
    projects: ["Dashboard Redesign", "Mobile App", "Design System"]
  },
  { 
    id: 2, 
    name: "Sarah Chen", 
    role: "UX Designer", 
    status: "Away", 
    bio: "User-centered design advocate with 5+ years of experience in creating intuitive digital experiences.",
    email: "sarah@company.com",
    projects: ["User Research", "Prototype Design", "Usability Testing"]
  },
  { 
    id: 3, 
    name: "Michael Rodriguez", 
    role: "Backend Developer", 
    status: "Active", 
    bio: "Full-stack developer specializing in Node.js and cloud architecture. Love solving complex technical challenges.",
    email: "michael@company.com",
    projects: ["API Development", "Database Optimization", "Cloud Migration"]
  }
]

// SearchFilter Component
function SearchFilter({ search, setSearch, role, setRole }) {
  const roles = ["Frontend Developer", "Backend Developer", "UX Designer", "Product Manager"]
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl border border-gray-200/50 shadow-sm">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search team members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      <div className="relative min-w-[200px]">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-gray-900 appearance-none cursor-pointer"
        >
          <option value="">All Roles</option>
          {roles.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

// MemberCard Component
function MemberCard({ member, onClick }) {
  const initials = member.name.split(" ").map(n => n[0]).slice(0, 2).join("")
  
  return (
    <div 
      onClick={onClick} 
      className="group relative bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-lg">
              {initials}
            </div>
            {/* Status indicator */}
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-3 border-white shadow-sm ${
              member.status === "Active" ? "bg-emerald-500" : "bg-amber-500"
            }`}></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors duration-200">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm font-medium">{member.role}</p>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            member.status === "Active" 
              ? "bg-emerald-100 text-emerald-700" 
              : "bg-amber-100 text-amber-700"
          }`}>
            {member.status}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {member.bio}
        </p>
        
        {/* Hover arrow */}
        <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// MemberModal Component
function MemberModal({ open, onOpenChange, member }) {
  if (!open || !member) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl shadow-lg">
                {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                <p className="text-gray-600 font-medium">{member.role}</p>
              </div>
            </div>
            
            <button 
              onClick={() => onOpenChange(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Status badge */}
          <div className="flex gap-2 mb-6">
            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
              member.status === "Active" 
                ? "bg-emerald-100 text-emerald-700" 
                : "bg-amber-100 text-amber-700"
            }`}>
              {member.status}
            </div>
          </div>
          
          {/* Tabs */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Profile</h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-gray-600">Email:</span> {member.email}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Projects</h3>
              <div className="grid gap-2">
                {member.projects.map((project, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">{project}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Dashboard Component
export default function Dashboard() {
  const [search, setSearch] = useState("")
  const [role, setRole] = useState("")
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return seed.filter((m) =>
      (!q || m.name.toLowerCase().includes(q)) &&
      (!role || m.role === role)
    )
  }, [search, role])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6">``
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Team Dashboard
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        <SearchFilter search={search} setSearch={setSearch} role={role} setRole={setRole} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <MemberCard key={m.id} member={m} onClick={() => {
              setActive(m)
              setOpen(true)
            }} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-500 font-medium">No members match your filters</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </main>

      <MemberModal open={open} onOpenChange={setOpen} member={active} />
    </div>
  )
}