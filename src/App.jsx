import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy } from "react"
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/login"))
const Chat = lazy(() => import("./pages/Chat"))
const Group = lazy(() => import("./pages/Group"))
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:chatId" element={<Chat/>} />
      <Route path="/group" element={<Group/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<h1>404 Page not found</h1>} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
