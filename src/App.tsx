import Navbar from "./components/Navbar"
import Dashboard from "./Pages/Dashboard"


function App() {


  return (
    <>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
          <Navbar/>
             <main className="container mx-auto px-6 py-8 space-y-8">
                <Dashboard/>
             </main>
        </div>
    </>
  )
}

export default App
