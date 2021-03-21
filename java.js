const form = document.querySelector('.FormMovie');
const result = document.querySelector('.result');
/* <section>
   <h2>Name</h2>
   <img src="" alt="Poster">
   <p>Year</p>
   <hr/>
    
    </section>*/
 function createMovie(name, LinkToPoster, year,) {
    const titletext = document.createTextNode(name);
    const title = document.createElement('h2');
    title.appendChild(titletext);

    const poster = document.createElement('img');
    poster.src = LinkToPoster;
    poster.alt = name;

    const yearText = document.createTextNode(year);
    const yearP = document.createElement('p');
    yearP.appendChild(yearText);

    const hr = document.createElement('hr');

    const movieSection = document.createElement('section');
    movieSection.appendChild(title);
    movieSection.appendChild(poster);
    movieSection.appendChild(yearP);
    movieSection.appendChild(hr);
    
   
    return movieSection;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name= document.querySelector('#name').value;
    const type = document.querySelector('#type').value;
    
    fetch(`http://www.omdbapi.com/?apikey=1c02a36c&s=${name}&type=${type}`)
    .then((response) => response.json())
    .then((data) => { 
        data.Search.forEach((movie) => {
        const movieLayout = createMovie(movie.Title, movie.Poster, movie.Year,);

        result.appendChild( movieLayout);
    });

});
    console.log({ name, type, });
});

const btnSearch = document.querySelector('.btn-save');
btnSearch.addEventListener('click', () =>{
  const filmId = window.localStorage.getItem('url');
  window.localStorage.setItem('url');
});
console.log(window.localStorage.key('url'));

