async function fetchData(){
    const response = await fetch("https://swapi.dev/api/films")
    const data = await response.json()

    const ul = document.createElement('ul')

    data.results.forEach(film => {
        const li = document.createElement('li')
        li.innerText = film.title

        ul.append(li)
    });

    document.body.append(ul)    
}
fetchData()