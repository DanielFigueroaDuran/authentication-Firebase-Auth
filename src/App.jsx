import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Register from "./components/Register"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
