import MemberCard from '@/components/MemberCard'
import MemberModal from '@/components/MemberModal'
import SearchFilter from '@/components/SearchFilter'
const Dashboard = () => {
  return (
    <>
             <SearchFilter/>
    <div className=' flex flex-col md:grid grid-cols-3 gap-3'>
      
      <MemberCard/>
      <MemberModal/>
    </div>
    </>
  )
}

export default Dashboard
