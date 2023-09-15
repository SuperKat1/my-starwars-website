//async function fetchData(){
 fetch("https://swapi.dev/api/films")
    .then(response => response.json())
    .then(data => console.log(data))

    
//}