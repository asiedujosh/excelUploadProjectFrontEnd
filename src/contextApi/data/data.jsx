import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

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
    if (responseOnUpload.status === SUCCESS_STATUS) {
      console.log(responseOnUpload)
      return responseOnUpload.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
