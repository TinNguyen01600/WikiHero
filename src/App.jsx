import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllCharacters } from './features/Character/characterSlice'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from './features/Routing/Detail.jsx'
import Home from './features/Routing/Home.jsx';
import Marvel from './features/Routing/Marvel.jsx';

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
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home results={results}/>}/>
                <Route exact path="/marvel" element={<Marvel />} />
                <Route exact path="/detail" element={<Detail />} />
            </Routes>
        </Router>
    )
}

export default App
