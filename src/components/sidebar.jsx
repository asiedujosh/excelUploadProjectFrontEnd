import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShield,
  faMessage,
  faEnvelope,
  faHouse,
  faBook,
  faCloud,
  faStar,
  faTableList,
  faFile,
  faCalendarDays,
  faDatabase,
  faWrench,
  faInfo,
  faVideo,
  faFileShield,
  faFileSignature,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons"

let iconSmallSize = "w-4 h-4 m-1"

const Sidebar = () => {
  const { userProfile, processLogout } = useContext(AuthApiData)

  let handleLogout = () => {
    // console.log("Logginout")
    processLogout()
  }

  return (
    <div className="bg-gray-800 text-white w-1/6 absolute">
      <div className="mt-4">
        <Link to={"/dashboard"} className="text-2xl font-bold mb-4 px-4">
          DATA CATCH CAMP
        </Link>
        <hr className="my-2 mx-2" />
        <div className="flex space-x-4 mx-4">
          <span className="text-gray-100">Logged in as Jerry</span>
          <span className="text-gray-100">|</span>
          <span
            className="text-gray-100 cursor-pointer  hover:text-gray-300"
            onClick={() => handleLogout()}
          >
            Logout
          </span>
        </div>
        <div>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex mx-4 my-2  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faShield} className={iconSmallSize} />
            <span>My Projects</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex mx-4 my-2  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faMessage} className={iconSmallSize} />
            <span>Data Catch Messenger</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex mx-4 my-2  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className={iconSmallSize} />
            <span>Contact Messenger</span>
          </Link>
        </div>
        <div>
          <div className="w-full bg-gray-600 py-2 px-4 mt-4">
            <span>Project Home and Design</span>
          </div>
          <div className="flex mx-4 space-x-4">
            <div>
              <Link
                to={"/dashboard/workInProgress"}
                className="flex my-2  hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faHouse} className={iconSmallSize} />
                <span>Project Home</span>
              </Link>
            </div>
            <div>
              <Link
                to={"/dashboard/workInProgress"}
                className="flex my-2  hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faBook} className={iconSmallSize} />
                <span>Codebook</span>
              </Link>
            </div>
          </div>
          <div className="flex my-2 mx-4">
            <FontAwesomeIcon icon={faStar} className={iconSmallSize} />
            <span>Project Status: Production</span>
          </div>
        </div>
        <div>
          <div className="w-full bg-gray-600 py-2 px-4 mt-4">
            <span>Data Collection</span>
          </div>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faTableList} className={iconSmallSize} />
            <span>Record Status Dashboard</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFile} className={iconSmallSize} />
            <span>Add / Edit Records</span>
          </Link>
        </div>
        <div>
          <div className="w-full bg-gray-600 py-2 px-4 mt-4">
            <span>Applications</span>
          </div>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faCalendarDays} className={iconSmallSize} />
            <span>Calendar</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faDatabase} className={iconSmallSize} />
            <span>Data Exports, Reports & Stats</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faWrench} className={iconSmallSize} />
            <span>Data Comparison Tool</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFile} className={iconSmallSize} />
            <span>Logging</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faTableList} className={iconSmallSize} />
            <span>File Repository</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFileSignature} className={iconSmallSize} />
            <span>Customize / E-signatures</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFileShield} className={iconSmallSize} />
            <span>Data Quality and Resolve Issues</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className={iconSmallSize}
            />
            <span>Datacatch Mobile App</span>
          </Link>
        </div>
        <div>
          <div className="w-full bg-gray-600 py-2 px-4 mt-4">
            <span>Reports</span>
          </div>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faCalendarDays} className={iconSmallSize} />
            <span>STGCH5</span>
          </Link>
        </div>
        <div>
          <div className="w-full bg-gray-600 py-2 px-4 mt-4">
            <span>Help & Information</span>
          </div>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInfo} className={iconSmallSize} />
            <span>Help & Faq</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faVideo} className={iconSmallSize} />
            <span>Video Tutorial</span>
          </Link>
          <Link
            to={"/dashboard/workInProgress"}
            className="flex my-2 mx-4  hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faCloud} className={iconSmallSize} />
            <span>Suggest New Feature</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
