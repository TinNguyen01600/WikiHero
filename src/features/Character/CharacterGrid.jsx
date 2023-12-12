import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters }) => {
    return (
        <section className='cards-grid'>
            {characters.map(char => (
                <CharacterItem key={char.id} char={char} />
            ))}
        </section>
    )
}

export default CharacterGrid