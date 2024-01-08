import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Store from "./components/Store"
import Home from "./components/Home"
import Login from "./components/Login"

function App() {
 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
