import React, { useState, useContext } from "react"
import { DataApiData } from "../contextApi/data/dataContextApi"
import SubmitBtn from "../components/submitButton"
import generateUniqueID from "../utils/uniqueId"
import {
  RECORD_PAGE_TEXT,
  ADD_RECORD_FIELD,
} from "../constants/recordConstants"
import InputField from "../components/inputField"
import UploadDocs from "../components/uploadDocs"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CurtainLoader from "../components/curtainLoader"

const AddData = () => {
  const { processDataUpload, loader, setLoader } = useContext(DataApiData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    setLoader((prev) => !prev)
    formData.recordId = generateUniqueID("Ui")
    processDataUpload(formData)
    // console.log("Data Uploaded Successfully")
  }

  return (
    <>
      <div className="checkPoint">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {RECORD_PAGE_TEXT.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2">
                  {ADD_RECORD_FIELD.map((item) => {
                    return (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        readOnly={item.readOnly}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
                <div className="mt-4">
                  <UploadDocs
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn
                text={RECORD_PAGE_TEXT.buttonText}
                submit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {loader && <CurtainLoader />}
    </>
  )
}

export default AddData
