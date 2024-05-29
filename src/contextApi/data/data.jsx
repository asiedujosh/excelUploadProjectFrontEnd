import axios from "../../utils/axios.config"
import {
  LISTONPAGES,
  RECORDSONPAGE,
  SUCCESS_STATUS,
} from "../../constants/constant"

export const getAllData = async (data) => {
  try {
    let responseOnGetAllData = await axios.get(
      `/api/getAllData?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllData.status === SUCCESS_STATUS) {
      return responseOnGetAllData.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getRequestedData = async (id) => {
  try {
    let responseOnGetRequestedData = await axios.get(
      `/api/getRequestData/${id}`
    )
    if (responseOnGetRequestedData.status === SUCCESS_STATUS) {
      return responseOnGetRequestedData.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const exportRequestData = async (id) => {
  try {
    let responseOnExportData = await axios.get(`/api/getRecordExport/${id}`, {
      responseType: "blob",
    })
    if (responseOnExportData.status === SUCCESS_STATUS) {
      const url = window.URL.createObjectURL(
        new Blob([responseOnExportData.data])
      )
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "customers.csv")

      //Append to the document body
      document.body.appendChild(link)

      link.click()

      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllRecords = async (data) => {
  try {
    let responseOnGetAllRecords = await axios.get(
      `/api/getRecords?page=${data}&perPage=${RECORDSONPAGE}`
    )
    if (responseOnGetAllRecords.status === SUCCESS_STATUS) {
      return responseOnGetAllRecords.data
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const countData = async () => {
  try {
    let responseOnCountData = await axios.get("/api/countData")
    if (responseOnCountData.status === SUCCESS_STATUS) {
      return responseOnCountData.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchDataRecords = async (data) => {
  try {
    let responseOnSearchData = await axios.get(
      `/api/searchData?keyword=${data}`
    )
    if (responseOnSearchData.status === SUCCESS_STATUS) {
      return responseOnSearchData.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const dataUpload = async (data) => {
  try {
    let responseOnUpload = await axios.post("/api/uploadData", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    if (responseOnUpload) {
      if (responseOnUpload.status === SUCCESS_STATUS) {
        return responseOnUpload.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const deleteRecords = async (data) => {
  try {
    let responseOnDeleteRecords = await axios.delete(
      `/api/deleteRecords/${data}`
    )
    if (responseOnDeleteRecords) {
      if (responseOnDeleteRecords.status === SUCCESS_STATUS) {
        return responseOnDeleteRecords.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
