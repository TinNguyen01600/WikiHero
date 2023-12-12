import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllCharacters } from './features/Character/characterSlice'

import Header from './components/Header'
import AllCharacters from './features/Character/AllCharacters'
import SortMenu from './features/SortMenu/SortMenu.jsx'

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
        return Math.floor(totalPower/6)
    }
    for (let i=0; i<results.length; i++) {
        results[i] = {...results[i], overallPower: overallPower(results[i])}
    }

    /********************************************************************************** */
    // Sort characters with menu
    const sortMenu = useSelector(state => state.sortMenu)
    if (sortMenu.name) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.name > b.name) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.name < b.name) ? 1 : -1))}
    }
    else if (sortMenu.overallPower) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.overallPower > b.overallPower) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.overallPower < b.overallPower) ? 1 : -1))}
    }
    else if (sortMenu.intelligence) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.powerstats.intelligence > b.powerstats.intelligence) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.powerstats.intelligence < b.powerstats.intelligence) ? 1 : -1))}
    }
    else if (sortMenu.strength) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.powerstats.strength > b.powerstats.strength) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.powerstats.strength < b.powerstats.strength) ? 1 : -1))}
    }
    else if (sortMenu.speed) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.powerstats.speed > b.powerstats.speed) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.powerstats.speed < b.powerstats.speed) ? 1 : -1))}
    }
    else if (sortMenu.durability) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.powerstats.durability > b.powerstats.durability) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.powerstats.durability < b.powerstats.durability) ? 1 : -1))}
    }
    else if (sortMenu.power) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.powerstats.power > b.powerstats.power) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.powerstats.power < b.powerstats.power) ? 1 : -1))}
    }
    else if (sortMenu.combat) {
        if (sortMenu.ascending) { results = results.sort(((a, b) => (a.powerstats.combat > b.powerstats.combat) ? 1 : -1))}
        else {results = results.sort(((a, b) => (a.powerstats.combat < b.powerstats.combat) ? 1 : -1))}
    }

    /********************************************************************************** */
    return (
        <>
            <Header />
            <div className="container">
                <SortMenu />
            </div>
            <AllCharacters characters={results}/>
        </>
    )
}

export default App
