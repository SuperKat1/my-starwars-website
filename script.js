async function fetchData(path) {
    const rootURL = "https://swapi.dev/api/";
    const response = await fetch(rootURL + path);
    const data = await response.json();

    const ul = document.createElement('ul')

    data.results.forEach(film => {
        const li = document.createElement('li')
        li.innerText = film.title
        ul.append(li)
    });

}  
fetchData("films")

// Drop down films menu

    



