import React from "react"
import { spinnerImage } from "../constants/imageConstant"

const CurtainLoader = () => {
  return (
    <div
      id="overlay"
      className="fixed bg-black bg-opacity-50 inset-0 z-40 flex justify-center items-center"
    >
      <div className="bg-white border-md p-6">
        <img src={spinnerImage} alt="" class="h-20 w-20" />
      </div>
    </div>
  )
}

export default CurtainLoader
