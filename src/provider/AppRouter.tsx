import { Route, Routes } from "react-router-dom"
import { Main } from "../components/main"
import { SpeedByWordPage } from "../components/SpeedByWord"
import { SpeedByTextPage } from "../components/SpeedByText"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<div>123</div>} />
      <Route path="/speed-by-word" element={<SpeedByWordPage />} />
      <Route path="/speed-by-text" element={<SpeedByTextPage />} />
    </Routes>
  )
}

export default AppRouter