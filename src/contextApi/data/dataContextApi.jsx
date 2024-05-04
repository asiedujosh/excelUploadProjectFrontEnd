import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { dataUpload, getAllData, searchDataRecords, countData } from "./data"

export const DataApiData = createContext()

const DataApiDataProvider = (props) => {
  const [dataList, setDataList] = useState([])
  const [searchDataRecord, setSearchDataRecord] = useState([])
  const [paginationData, setPaginationData] = useState()
  const [noOfData, setNoOfData] = useState()

  //   const router = useRouter()

  const processSearchData = async (data) => {
    let responseOnSearch = await searchDataRecords(data)
    if (responseOnSearch) {
      setSearchDataRecord(responseOnSearch.data.data)
    }
  }

  const processCountData = async () => {
    let response = await countData()
    if (response) {
      // console.log(response)
      setNoOfData(response.data.data)
    }
  }

  const processGetAllData = async (data) => {
    let response = await getAllData(data || 1)
    if (response) {
      setDataList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processDataUpload = async (data) => {
    const formData = new FormData()
    formData.append("file", data)

    // console.log(formData)

    let response = await dataUpload(formData)
    if (response) {
      console.log(response.data.data)
      notify(SUCCESS_STATUS, "Data uploaded successfully")
    } else {
      setIsLoading(false)
      notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
    }
  }

  return (
    <DataApiData.Provider
      value={{
        dataList,
        paginationData,
        processDataUpload,
        processGetAllData,
        searchDataRecord,
        processSearchData,
        processCountData,
        noOfData,
      }}
    >
      {props.children}
    </DataApiData.Provider>
  )
}

export default DataApiDataProvider
