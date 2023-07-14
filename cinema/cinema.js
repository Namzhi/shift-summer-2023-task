const url = 'https://shift-backend.onrender.com/cinema/today';
const urlback = "https://shift-backend.onrender.com";
var films = fetch(url);
var num=1;
films.then(res => {
    return res.json();
})
.then( data => {console.log(Object.keys(data.films[0]));
    console.log((data.films));
    (data["films"]).forEach(user => { 
        const film = data.films[`${num}`-1];
       // console.log(film.userRatings);
        //console.log(film.userRatings.imdb);
        const namef = `<a href = "films/film${num}/film${num}.html" id = "title">${user.name}</a>`;
        //const nameo = `<div id ="originalName">Оригинальное название: "${user.originalName}"</div>`;
        //const descr = `<div id ="description">Описание: ${user.description}</div>`;
        const userRatingsKinoP= `Кинопоиск: ${film.userRatings.kinopoisk}`;
        const userRatingsImdb= `IMDb: ${film.userRatings.imdb}`;
        const imgM = `<div id = "concreteFilm">${namef}
        <br> <img src="${urlback}${user.img}" type="image/webp">
        <br>${userRatingsKinoP}
        <br>${userRatingsImdb}</div>`;
        
        document.getElementById('descr').insertAdjacentHTML('beforeend', (imgM));
        num++;
    });
})
.catch(error => console.log(error));

