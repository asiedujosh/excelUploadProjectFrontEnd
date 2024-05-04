import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { DataApiData } from "../contextApi/data/dataContextApi"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
// import Card from "../components/card"

const Dashboard = () => {
  const { isAuthenticated, processRetrieve } = useContext(AuthApiData)
  const { processCountData } = useContext(DataApiData)

  const navigate = useNavigate()

  useEffect(() => {
    processCountData()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    } else {
      //navigate("/")
      //Dashboard try retreive
      let dataRetrieve = async () => {
        let auth = await processRetrieve()
        if (auth) {
          navigate("/dashboard")
        } else {
          navigate("/")
        }
      }
      dataRetrieve()
    }
  }, [isAuthenticated])

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
