import React, { useContext } from "react"
import Card from "../components/card"
import LabelBtn from "../components/labelButton"
import { DataApiData } from "../contextApi/data/dataContextApi"

const Home = () => {
  const { noOfData } = useContext(DataApiData)

  return (
    <>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Data" link="data" qty={noOfData} />
          <LabelBtn text="Upload Data" path="uploadData" />
        </div>
      </div>
    </>
  )
}

export default Home
