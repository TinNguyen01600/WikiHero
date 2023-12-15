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
    const appearanceFilter = data.filter(item =>
        item.biography.firstAppearance.split(' ').some(word =>
            word.toLowerCase().startsWith(q)
        )
    )
    function concatAndRemoveDuplicates(arr1, arr2, arr3) {
        // Concatenate the arrays
        const combinedArray = arr1.concat(arr2, arr3);

        // Remove duplicates
        const uniqueArray = combinedArray.filter((item, index, array) => {
            // Check if the current object is the first occurrence in the array
            return array.findIndex(obj => JSON.stringify(obj) === JSON.stringify(item)) === index;
        });

        return uniqueArray;
    }
    return concatAndRemoveDuplicates(nameFilter, fullNameFilter, appearanceFilter)
}

export default filterCharacter