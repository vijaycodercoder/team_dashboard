import MemberCard from '@/components/MemberCard'
import MemberModal from '@/components/MemberModal'
import SearchFilter from '@/components/SearchFilter'
import type { Member } from '@/data/members';
import { useState } from 'react';
import { useSelector } from 'react-redux'
const Dashboard = () => {

  const {membersData} = useSelector((action:any)  =>action.basic)

const [modelData, setModelData] = useState<Member | null>(null)
const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
     <SearchFilter/>
      <div className=' flex flex-col md:grid grid-cols-3 gap-3'>
   {/* Card container */}
        {membersData && membersData.length > 0 ? (
          membersData.map((member: Member) => (
          <MemberCard
             key={member.id}
             member={member}
             onClick={() => {
                setModelData(member)
                setIsModalOpen(true)
            }}
          />
          ))
        ) : (
          <p className="text-sm text-muted-foreground ml-auto mr-a">No data available</p>
        )}
      </div>
{/* model */}
        {modelData && (
        <MemberModal 
          modelData={modelData} 
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
       />
      )}

    </>
  )
}

export default Dashboard
