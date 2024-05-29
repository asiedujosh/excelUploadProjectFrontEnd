const UploadDocs = ({ change }) => {
  const handleDocsUpload = (e) => {
    change(e.target.files[0], "fileUpload")
  }

  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-md">
      <div className="w-full md:w-1/2 mt-2 md:mt-0">
        <input type="file" onChange={handleDocsUpload} id="file-upload" />
      </div>
    </div>
  )
}

export default UploadDocs
