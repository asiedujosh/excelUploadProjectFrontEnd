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
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* <Navbar /> */}
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="w-5/6 absolute">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
