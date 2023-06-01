import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "../pages/Main"

const MainRoutes = () => {
  return (
    <div className="bg-[#343541]">
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default MainRoutes