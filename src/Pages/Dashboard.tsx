import MemberCard from '@/components/MemberCard'
import MemberModal from '@/components/MemberModal'
import SearchFilter from '@/components/SearchFilter'
import type { Member } from '@/data/members';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
const Dashboard = () => {

  const {membersData} = useSelector(action =>action.basic)

const [modelData, setModelData] = useState<Member | null>(null)

  return (
    <>
     <SearchFilter/>
      <div className=' flex flex-col md:grid grid-cols-3 gap-3'>
   
        {membersData && membersData.length > 0 ? (
          membersData.map((member: Member) => (
            <MemberCard
              key={member.id}
              member={member}
              onClick={() => setModelData(member)}
            />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No data available</p>
        )}
      </div>
    {modelData && <MemberModal modelData={modelData} />}

    
    </>
  )
}

export default Dashboard
