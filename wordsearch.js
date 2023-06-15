const wordSearch = (letters, word) => { 
    // check horizontal
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    // check vertical
    let size = (horizontalJoin.length > 0) ? horizontalJoin[0].length : 0;
    for (let i = 0; i < size; i++) {
        const verticalJoin = horizontalJoin.map((horizontalWord) => {
            return horizontalWord[i];
        }).join("");
        if (verticalJoin.includes(word)) return true;
    }

    // did not match anything
    return false;
}

module.exports = wordSearch