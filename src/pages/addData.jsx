import React, { useState, useContext } from "react"
import { DataApiData } from "../contextApi/data/dataContextApi"
import SubmitBtn from "../components/submitButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddData = () => {
  const { processDataUpload } = useContext(DataApiData)
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = () => {
    processDataUpload(file)
    // console.log("Data Uploaded Successfully")
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <h2>Upload your Data</h2>
          <div>
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              onChange={handleFileChange}
              className="mb-6"
            />
          </div>
          <div>
            <SubmitBtn text={"Submit"} submit={handleSubmit} />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default AddData
