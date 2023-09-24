
const chooseMovieButton = document.getElementById("chooseMovie");    
const menu = document.getElementById("menu");
const lists = document.getElementById("lists");
const characters = document.getElementById("characters");
const planets = document.getElementById("planets");
const starships = document.getElementById("starships");

chooseMovieButton.addEventListener("click", () => {
    if (menu.classList.contains("menu_active")) {
        menu.classList.remove("menu_active");
    } else {
        menu.classList.add("menu_active");
    }
});

async function fetchData() {
    const rootURL = "https://swapi.dev/api/";
    const responseFilm = await fetch(rootURL + "films");
    const filmData = await responseFilm.json();

    const responsePeople = await fetch(rootURL + "people");
    const peopleData = await responsePeople.json();

    const responsePlanets = await fetch(rootURL + "planets");
    const planetData = await responsePlanets.json();

    const responseStarships = await fetch(rootURL + "starships");
    const starshipData = await responseStarships.json();

    chooseMovieButton.removeAttribute("disabled");  // this is required because the API response time is really, really slow
    chooseMovieButton.style.backgroundColor='white';  // this indicates to the webpage user that the menu select is ready to use
    chooseMovieButton.addEventListener("mouseenter", () => {chooseMovieButton.style.backgroundColor='gold';});
    chooseMovieButton.addEventListener("mouseleave", () => {chooseMovieButton.style.backgroundColor='white';});

    filmData.results.forEach(film => {
        const filmButton = document.createElement('button')
        filmButton.innerText = film.title

        filmButton.addEventListener("click", () => {
            lists.classList.add("lists_active");
            characters.innerHTML = "";
            planets.innerHTML = "";
            starships.innerHTML = "";
            film.characters.forEach((c) => {
                const a = document.createElement('a');
                a.setAttribute("href", c);
                a.innerText = c;
                characters.append(a);
            });
            film.planets.forEach((c) => {
                const a = document.createElement('a');
                a.setAttribute("href", c);
                a.innerText = c;
                planets.append(a);
            });
            film.starships.forEach((c) => {
                const a = document.createElement('a');
                a.setAttribute("href", c);
                a.innerText = c;
                starships.append(a);
            });
        });
        menu.append(filmButton)
    });  
}  
fetchData()



    



