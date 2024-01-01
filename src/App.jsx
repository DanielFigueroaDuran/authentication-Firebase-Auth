import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Rout from "./components/Rout"

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Rout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
