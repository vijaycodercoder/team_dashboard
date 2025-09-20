import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Member } from '@/data/members';
import { useMemo } from "react";
const MemberCard = ({member, onClick}:{  member: Member , onClick?: () => void}) => {


  const avatarFallback = useMemo(() => 
    member.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase(),
    [member.name]
  );
  return (
<>
    <div className="w-full " onClick={onClick}>
      {/* Desktop View  */}
      <Card className="hidden md:block hover:shadow-lg hover:shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 max-w-sm group cursor-pointer border-gray-200/80 bg-gradient-to-b from-white to-gray-50/30">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Avatar className="w-20 h-20 ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300">
              <AvatarImage 
                src={member.image}
                alt={member.name}
                loading="lazy" 
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <AvatarFallback className="text-lg font-bold uppercase"> {avatarFallback}</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">
           {member.name}
            </CardTitle>
            <CardDescription className="text-sm font-medium text-gray-500">
                    {member.role}
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="text-center pb-4">
          <Badge variant={member.status == "Active" ?"default" :"destructive"} className="shadow-sm">
             {member.status}
          </Badge>
        </CardContent>
        
        <CardFooter className="pt-2 ">
          <Button 
            variant="outline" 
            className="w-full py-2.5 rounded-lg font-semibold group-hover:border-blue-300 group-hover:text-blue-600 group-hover:bg-blue-50/50 transition-all duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            View Profile
          </Button>
        </CardFooter>
      </Card>

      {/* Mobile View */}
      <Card className="md:hidden hover:shadow-md hover:shadow-gray-900/5 transition-all duration-200 cursor-pointer active:scale-[0.98] border-gray-200/80">
        <div className="p-5">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <Avatar className="w-14 h-14 ring-2 ring-gray-100 shrink-0">
              <AvatarImage 
              loading="lazy" 
                src={member.image}
                alt={member.name}
              />
 <AvatarFallback className="text-lg font-bold uppercase"> {avatarFallback}</AvatarFallback>
 </Avatar>
            
            {/* Content */}
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1 ">
                  <CardTitle className="text-lg leading-tight truncate">
                  {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-500 mt-0.5">
                    {member.role}
                  </CardDescription>
                </div>
                
                 <Badge variant={member.status == "Active" ?"default" :"destructive"} >
                    {member.status}
                </Badge>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="shrink-0 ml-2 ">
              <Button 
                variant="ghost" 
                className="p-2 h-auto hover:bg-gray-100 rounded-lg group"
                aria-label="View Alice Johnson's profile"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
   
   </>
  )
}

export default MemberCard




