import React, { useEffect, useContext } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Login from "./pages/login"
import ComingSoon from "./pages/comingSoon"
import "./App.css"

const Data = React.lazy(() => import("./pages/data"))
const AddData = React.lazy(() => import("./pages/addData"))
const ViewData = React.lazy(() => import("./pages/viewData"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route
            path="uploadData"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddData />
              </React.Suspense>
            }
          />
          <Route
            path="data"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Data />
              </React.Suspense>
            }
          />
          <Route
            path="viewRecords/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ViewData />
              </React.Suspense>
            }
          />
          <Route path="workInProgress" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
