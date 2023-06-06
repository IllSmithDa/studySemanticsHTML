import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import TestUi from "./pages/TestUI/TestUI";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/test" element={<TestUi />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
