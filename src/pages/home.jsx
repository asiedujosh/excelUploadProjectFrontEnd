import React, { useContext } from "react"
import RecordTableContainer from "../components/recordTableContainer"
import { DataApiData } from "../contextApi/data/dataContextApi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShield,
  faTableList,
  faPlus,
  faFilePdf,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

let iconSmallSize = "w-6 h-6 m-1 text-gray-800"
let buttonIcon = "w-4 h-4 m-1 text-white"

const Home = () => {
  const { noOfData } = useContext(DataApiData)

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-gray-800">
          <h3 className="text-xl font-medium">
            Welcome to Data Catch Camp, the ultimate solution for effortless and
            efficient data collection
          </h3>

          <div className="bg-white py-6 px-6 mt-6">
            <div className="flex">
              <FontAwesomeIcon icon={faShield} className={iconSmallSize} />
              <span className="text-gray-800 text-2xl font-medium">
                My Projects
              </span>
            </div>
            <p className="mt-2">
              In the business world, data is crucial for making strategic
              decisions. DataCatch Camp provides business professionals with an
              efficient way to collect customer feedback, market research data,
              and operational metrics. The app’s seamless integration with other
              business tools ensures that the collected data can be easily
              exported and analyzed alongside other data sets. This helps
              businesses stay agile, respond to market trends promptly, and
              optimize their operations based on accurate and timely
              information.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/dashboard/uploadData">
              <button className="w-full flex mt-3 bg-green-700 hover:bg-green-500 transition duration-300 py-2 px-4 rounded-md">
                <FontAwesomeIcon icon={faPlus} className={buttonIcon} />
                <span className="text-white">Records</span>
              </button>
            </Link>
            <Link to="/dashboard/data">
              <button className="w-full flex mt-3 bg-yellow-600 hover:bg-yellow-500 transition duration-300 py-2 px-4 rounded-md">
                <FontAwesomeIcon icon={faTableList} className={buttonIcon} />
                <span className="text-white">Table</span>
              </button>
            </Link>
            <Link to="/">
              <button className="w-full flex mt-3 bg-blue-700 hover:bg-blue-500 transition duration-300 py-2 px-4 rounded-md">
                <FontAwesomeIcon icon={faFileExcel} className={buttonIcon} />
                <span className="text-white">Export Excel / CSV</span>
              </button>
            </Link>
            <Link to="/">
              <button className="w-full flex mt-3 bg-red-500 hover:bg-red-800 transition duration-300 py-2 px-4 rounded-md">
                <FontAwesomeIcon icon={faFilePdf} className={buttonIcon} />
                <span className="text-white">Export Pdf</span>
              </button>
            </Link>
          </div>

          <div className="py-4 px-2 bg-white mt-3">
            <div className="flex">
              <span className="text-gray-800 px-6 text-2xl font-medium">
                Records
              </span>
            </div>
            <RecordTableContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
