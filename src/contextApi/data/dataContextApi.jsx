import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  dataUpload,
  getAllData,
  searchDataRecords,
  countData,
  getAllRecords,
  getRequestedData,
  exportRequestData,
  deleteRecords,
} from "./data"

export const DataApiData = createContext()

const DataApiDataProvider = (props) => {
  const [dataList, setDataList] = useState([])
  const [viewDataList, setViewDataList] = useState([])
  const [recordList, setRecordList] = useState([])
  const [loader, setLoader] = useState(false)
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

  const processGetRequestedData = async (id) => {
    let response = await getRequestedData(id)
    if (response) {
      setViewDataList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetExportRequiredData = async (id) => {
    // console.log(id)
    let response = await exportRequestData(id)
    if (response) {
      // console.log(response)
      return response.data
    } else {
      return false
    }
  }

  const processGetAllRecords = async (data) => {
    let response = await getAllRecords(data || 1)
    if (response) {
      setRecordList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processDataUpload = async (data) => {
    let response = await dataUpload(data)
    if (response) {
      setLoader((prev) => !prev)
      notify(SUCCESS_STATUS, "Data uploaded successfully")
    } else {
      setLoader((prev) => !prev)
      notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
    }
  }

  const processDeleteRecords = async (data) => {
    let response = await deleteRecords(data)
    if (response) {
      processGetAllRecords()
      notify(SUCCESS_STATUS, "Data deleted successfully")
    }
  }

  return (
    <DataApiData.Provider
      value={{
        recordList,
        dataList,
        viewDataList,
        paginationData,
        processDataUpload,
        processGetAllRecords,
        processGetRequestedData,
        processGetExportRequiredData,
        processGetAllData,
        searchDataRecord,
        processSearchData,
        processCountData,
        processDeleteRecords,
        noOfData,
        loader,
        setLoader,
      }}
    >
      {props.children}
    </DataApiData.Provider>
  )
}

export default DataApiDataProvider
