import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { useParams } from "react-router-dom"
import { DataApiData } from "../contextApi/data/dataContextApi"
import SearchContainer from "./searchContainer"
import ViewTable from "./viewTable"

const ViewTableContainer = () => {
  let { id } = useParams()
  const { paginationData, processGetRequestedData } = useContext(DataApiData)

  useEffect(() => {
    processGetRequestedData(id)
  }, [])

  //   const handleSearchChange = (data) => {
  //     setSearchTerm(data)
  //   }

  //   const handleSearchSubmit = () => {
  //     processSearchData(searchTerm)
  //   }

  return (
    <div className="bg-white rounded shadow-lg">
      <div className="">
        <ViewTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetRequestedData}
      />
    </div>
  )
}

export default ViewTableContainer
