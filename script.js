// let data;
const chooseMovieButton = document.getElementById("chooseMovie");    
const menu = document.getElementById("menu");

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
    chooseMovieButton.removeAttribute("disabled");  // this is required because the API response time is really, really slow
    chooseMovieButton.style.backgroundColor='white';  // this indicates to the webpage user that the menu select is ready to use
    chooseMovieButton.addEventListener("mouseenter", () => {chooseMovieButton.style.backgroundColor='gold';});
    chooseMovieButton.addEventListener("mouseleave", () => {chooseMovieButton.style.backgroundColor='white';});

    data.results.forEach(film => {
        const filmButton = document.createElement('button')
        filmButton.innerText = film.title
        menu.append(filmButton)
    });
    
}  
fetchData("films")

// Drop down films menu

    



