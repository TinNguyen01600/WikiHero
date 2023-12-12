import './App.css'
import Header from './components/Header'
import AllCharacters from './features/Character/AllCharacters'
import SortMenu from './features/SortMenu/SortMenu'

function App() {

    return (
        <>
            <Header />
            <div className="container">
                <SortMenu />
            </div>
            <AllCharacters />
        </>
    )
}

export default App
