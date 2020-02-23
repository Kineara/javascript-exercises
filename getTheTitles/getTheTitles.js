const getTheTitles = function(library) {
    titles = library.map(book => `${book.title}`)
    
    return titles;
}

module.exports = getTheTitles;
