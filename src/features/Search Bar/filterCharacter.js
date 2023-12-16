const filterCharacter = (data, query) => {
    const q = query.toLowerCase();
    const nameFilter = data.filter(item =>
        item.name.split(' ').some(word =>
            word.toLowerCase().startsWith(q)
        )
    )
    const fullNameFilter = data.filter(item =>
        item.biography.fullName.split(' ').some(word =>
            word.toLowerCase().startsWith(q)
        )
    )
    const concatenatedArray = Array.from(new Set([...nameFilter, ...fullNameFilter].map(obj => obj.id)))
        .map(id => {
            return [...nameFilter, ...fullNameFilter].find(obj => obj.id === id);
        });
    return concatenatedArray
}

export default filterCharacter