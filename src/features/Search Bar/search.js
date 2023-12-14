const filterCharacter = (data, query) => {
    const q = query.toLowerCase();
    const nameFilter = data.filter(item =>
        item.name.split(' ').some(word =>
            word.toLowerCase().startsWith(q)
        )
    )
    return nameFilter
}

export default filterCharacter