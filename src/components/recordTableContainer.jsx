import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { DataApiData } from "../contextApi/data/dataContextApi"
import SearchContainer from "./searchContainer"
import RecordTable from "./recordTable"

const RecordTableContainer = () => {
  const { paginationData, processSearchData, processGetAllRecords } =
    useContext(DataApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetAllRecords()
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchData(searchTerm)
  }

  return (
    <div className="w-90 m-6 p-4 bg-white rounded shadow-lg">
      <div className="overflow-auto">
        <RecordTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllRecords}
      />
    </div>
  )
}

export default RecordTableContainer
