const arrayToChunkArray = (array, chunkSize) =>{
    let arrayToChunkArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        arrayToChunkArray.push(chunk);
    }
    return arrayToChunkArray;
}

export default arrayToChunkArray;