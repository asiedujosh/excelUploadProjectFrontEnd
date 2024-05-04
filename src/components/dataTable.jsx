import React, { useContext, useEffect, useState } from "react"
import { DATATABLE } from "../constants/dataConstant"
import { DataApiData } from "../contextApi/data/dataContextApi"

const DataTable = () => {
  const { dataList, searchDataRecord } = useContext(DataApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {DATATABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchDataRecord.length > 0
            ? searchDataRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.domain}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.subDomain}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.category}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.subCategory}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.healthOutcome}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.variable}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.variableName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.variableDescription}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.sex}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.race}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.ethnicity}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.age}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.geography}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataUnit}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataYear}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataSourceName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataSource}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataPortalName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataPortal}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataFormat}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataLocation}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.accessedDate}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.processed}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.note}
                  </td>
                </tr>
              ))
            : dataList.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.domain}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.subDomain}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.category}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.subCategory}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.healthOutcome}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.variable}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.variableName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.variableDescription}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.sex}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.race}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.ethnicity}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.age}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.geography}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataUnit}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataYear}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataSourceName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataSource}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataPortalName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataPortal}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataFormat}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.dataLocation}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.accessedDate}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.processed}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.note}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  )
}

export default DataTable
