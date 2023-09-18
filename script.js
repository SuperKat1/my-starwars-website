// let data;
const chooseMovieButton = document.getElementById("chooseMovie");    
const menu = document.getElementById("menu");

chooseMovieButton.addEventListener("mouseenter", () => {chooseMovieButton.style.backgroundColor='gold';})
chooseMovieButton.addEventListener("mouseleave", () => {chooseMovieButton.style.backgroundColor='white';})


chooseMovieButton.addEventListener("click", () => {
    if (menu.classList.contains("menu_active")) {
        menu.classList.remove("menu_active");
    } else {
        menu.classList.add("menu_active");
    }
});





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

    



