import { Route, Routes } from "react-router"

import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import AuthLayout from "../layout/AuthLayout"


function MainRouter() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default MainRouter
