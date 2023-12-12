import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllCharacters } from './features/Character/characterSlice'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import sortMenuSelect from './features/SortMenu/sortMenuSelect.js'
import Detail from './features/Routing/Detail.jsx'
import Home from './features/Routing/Home.jsx';

function App() {
    const characters = useSelector(state => state.character.characters)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [])
    let results = [...characters]

    /********************************************************************************** */
    // Add new attribute 'overallPower' to char obj
    const overallPower = (char) => {
        const totalPower = Object.keys(char.powerstats).map(stat => char.powerstats[stat]).reduce((total, num) => total + num)
        return Math.floor(totalPower / 6)
    }
    for (let i = 0; i < results.length; i++) {
        results[i] = { ...results[i], overallPower: overallPower(results[i]) }
    }

    /********************************************************************************** */
    // Sort characters with menu
    results = sortMenuSelect(results)

    /********************************************************************************** */
    // Select character for detail page
    const selectedChar = useSelector(state => state.character.selectedChar)

    /********************************************************************************** */
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home results={results}/>}/>
                <Route exact path="/detail" element={<Detail char={selectedChar}/>} />
            </Routes>
        </Router>
    )
}

export default App
