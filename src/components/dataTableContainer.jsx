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
    <div className="bg-white rounded shadow-lg">
      <SearchContainer
        value={searchTerm}
        change={(data) => {
          handleSearchChange(data)
        }}
        submitSearch={() => {
          handleSearchSubmit()
        }}
      />
      <div className="">
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
