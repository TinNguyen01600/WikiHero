import { useSelector } from 'react-redux'


const MyPagination = () => {
    const pageNumbers = []
    const characters = useSelector(state => state.character.characters)
    for (let i = 1; i<= Math.ceil(characters.length / 15); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className='pagination'>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} style={{margin: '5px'}}>
                        <a href="!#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MyPagination
