
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


const MemberModal = () => {
  return (
   <Dialog open={true}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="flex space-x-4">
           <Avatar className="w-20 h-20 ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300">
              <AvatarImage 
                src="https://github.com/shadcn.png" 
                alt="Alice Johnson"
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <AvatarFallback className="text-lg">AJ</AvatarFallback>
            </Avatar>

             <div className="space-y-1">
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">
              Alice Johnson
            </CardTitle>
            <CardDescription className="text-sm font-medium text-gray-500">
              Senior Frontend Developer
            </CardDescription>
             <Badge className="shadow-sm">
            Active
          </Badge>
          </div>
      </DialogTitle>

 

      <DialogDescription>

        {/* Tabs Section  */}
     <div className="flex w-full  flex-col gap-6">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">
              <svg className="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile</TabsTrigger>
          <TabsTrigger value="projects">
             <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" >
          <Card >
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription>
           <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">About</label>
                <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border">
                 Passionate frontend developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating beautiful user interfaces that provide exceptional user experiences.
                </p>
              </div>
<div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address
                  </label>
                  <p className="text-gray-900 bg-white p-3 rounded-lg border font-mono text-sm">
                   alice@example.com
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone
                  </label>
                  <p className="text-gray-900 bg-white p-3 rounded-lg border font-mono text-sm">
               +91 85146 24866
                  </p>
                </div>
          

               <div className="">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">10</div>
                  <div className="text-sm text-blue-600 font-medium">Total Projects</div>
                </div>
                
            
              </div>
                  </div>
              </CardDescription>
            </CardHeader>
        
          </Card>
        </TabsContent>
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription>
               
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
            
            </CardContent>
            <CardFooter>
          
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default MemberModal


// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import type  { Member } from "@/data/members"

// type Props = {
//   open: boolean
//   onOpenChange: (open: boolean) => void
//   member: Member | null
// }

// export function MemberModal({ open, onOpenChange, member }: Props) {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-lg">
//         {member && (
//           <>
//             <DialogHeader>
//               <DialogTitle className="flex justify-between items-center">
//                 {member.name}
//                 <div className="flex gap-2">
//                   <Badge>{member.role}</Badge>
//                   <Badge variant={member.status === "Active" ? "default" : "secondary"}>
//                     {member.status}
//                   </Badge>
//                 </div>
//               </DialogTitle>
//             </DialogHeader>

//             <Tabs defaultValue="profile" className="mt-4">
//               <TabsList>
//                 <TabsTrigger value="profile">Profile</TabsTrigger>
//                 <TabsTrigger value="projects">Projects</TabsTrigger>
//               </TabsList>

//               <TabsContent value="profile">
//                 <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
//                 <p className="text-sm mt-2"><strong>Email:</strong> {member.email}</p>
//               </TabsContent>

//               <TabsContent value="projects">
//                 <ul className="list-disc pl-5 space-y-1 mt-2">
//                   {member.projects.map((p, i) => (
//                     <li key={i} className="text-sm">{p}</li>
//                   ))}
//                 </ul>
//               </TabsContent>
//             </Tabs>
//           </>
//         )}
//       </DialogContent>
//     </Dialog>
//   )
// }
