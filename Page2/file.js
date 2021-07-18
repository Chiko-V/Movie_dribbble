
const Api_Key = 'api_key=30c72c7b56cb38c40f61833688a5cad9';
const Base_Url = 'https://api.themoviedb.org/3';
const Api_Url = Base_Url + '/discover/movie?sort_by=popularity.desc&' + Api_Key;
const Img_Url = 'https://image.tmdb.org/t/p/w500';

const main=document.getElementById('main');

getMovies(Api_Url);


function getMovies(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML='';

    data.forEach(movie =>  {
        const {poster_path} =movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML= `
            <img class="movie__1" src="${Img_Url+poster_path}" alt="shawshank">`
           
            
        
        main.appendChild(movieEl);
             
            
    })
}

    
    
       
        


