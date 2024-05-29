import React, { useContext, useEffect, useState } from "react"
import { RECORD_TABLE } from "../constants/recordConstants"
import { DataApiData } from "../contextApi/data/dataContextApi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

let buttonIcon = "w-4 h-4 text-white"

const RecordTable = () => {
  const { recordList, processDeleteRecords, processGetExportRequiredData } =
    useContext(DataApiData)

  const handleExportRequiredData = (id) => {
    processGetExportRequiredData(id)
  }

  const deleteRecord = (id) => {
    processDeleteRecords(id)
  }

  //
  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {RECORD_TABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full overflow-y-auto">
          {recordList ? (
            recordList.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="border border-gray-200 py-4 px-2">
                  {item.recordId}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.recordName}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.recordDescription}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.created_at}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.author}
                </td>
                <td className="border border-gray-200 py-4 px-2 flex space-x-2 justify-center">
                  <Link
                    to={`viewRecords/${item.recordId}`}
                    className="cursor-pointer p-2 rounded-md  bg-blue-700 hover:bg-blue-500 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faEye} className={buttonIcon} />
                  </Link>
                  <span
                    onClick={() => handleExportRequiredData(item.recordId)}
                    className="cursor-pointer p-2 rounded-md  bg-yellow-700 hover:bg-yellow-500 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faUpload} className={buttonIcon} />
                  </span>
                  <span
                    onClick={() => {
                      deleteRecord(item.recordId)
                    }}
                    className="cursor-pointer p-2 rounded-md  bg-red-700 hover:bg-red-500 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faTrash} className={buttonIcon} />
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <div className="w-full flex items-center">
              <h3 className="text-xl">No records available</h3>
            </div>
          )}
        </tbody>
      </table>
    </>
  )
}

export default RecordTable
