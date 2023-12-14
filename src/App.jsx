import './App.css'
import {  useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllCharacters } from './features/Character/characterSlice'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from './features/Routing/Detail.jsx'
import Home from './features/Routing/Home.jsx';
import Marvel from './features/Routing/Marvel.jsx';
import DCComics from './features/Routing/DCComics.jsx'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [])

    /********************************************************************************** */
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/marvel" element={<Marvel />} />
                <Route exact path="/dccomics" element={<DCComics />} />
                <Route exact path="/detail" element={<Detail />} />
            </Routes>
        </Router>
    )
}

export default App
