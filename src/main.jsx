import React from "react"
import ReactDOM from "react-dom/client"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import DataApiDataProvider from "./contextApi/data/dataContextApi.jsx"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthApiDataProvider>
      <DataApiDataProvider>
        <App />
      </DataApiDataProvider>
    </AuthApiDataProvider>
  </React.StrictMode>
)
