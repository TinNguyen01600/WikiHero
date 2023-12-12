import { useSelector } from "react-redux"

const sortMenuSelect = ( results ) => {
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

    return results
}

export default sortMenuSelect