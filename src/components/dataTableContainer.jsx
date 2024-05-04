import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { DataApiData } from "../contextApi/data/dataContextApi"
import SearchContainer from "./searchContainer"
import DataTable from "./dataTable"

const DataTableContainer = () => {
  const { paginationData, processSearchData, processGetAllData } =
    useContext(DataApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetAllData()
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchData(searchTerm)
  }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <SearchContainer
        value={searchTerm}
        change={(data) => {
          handleSearchChange(data)
        }}
        submitSearch={() => {
          handleSearchSubmit()
        }}
      />
      <div className="overflow-auto" style={{ height: "80%" }}>
        <DataTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllData}
      />
    </div>
  )
}

export default DataTableContainer
