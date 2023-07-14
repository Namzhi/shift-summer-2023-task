
const url = 'https://shift-backend.onrender.com/cinema/today';
const urlback = "https://shift-backend.onrender.com";
var films = fetch(url);
var num=1;
films.then(res => {
    return res.json();
})
.then( data => {console.log(data.films[2].name);
        const film = data.films[2];
        console.log(film.userRatings);
        const namef = `<h1>${film.name}</h1>`;
        const nameo = `<h2 id = "nameo">${film.originalName}</h2>`;
        const description = `<li id = "description">${film.description}</li>`;
        const releaseDate= `<li>Дата релиза: ${film.releaseDate}</li>`;
        const actors= `<li>В главных ролях: ${film.actors[0].fullName}</li>`;
        const directors= `<li>Режиссер: ${film.directors[0].fullName}</li>`;
        const runtime= `<li>Длительность фильма: ${film.runtime} минут</li>`;
        const ageRating= `<li>Возрастной рейтинг: ${film.ageRating}</li>`;
        const genres= `<li>Жанр: ${film.genres}</li>`;
        const userRatingsImdb= `<li>оценка IMDb: ${film.userRatings.imdb}</li>`;
        const userRatingsKinoP= `<li>оценка Кинопоиска: ${film.userRatings.kinopoisk}</li>`;
        const img = `<br><img src="${urlback}${film.img}" type="image/webp">`;
        const place = document.getElementById('de');
        place.insertAdjacentHTML('beforeend', (namef));
        place.insertAdjacentHTML('beforeend', (nameo));
        place.insertAdjacentHTML('beforeend', (img));
        place.insertAdjacentHTML('beforeend', (description));
        place.insertAdjacentHTML('beforeend', (releaseDate));
        place.insertAdjacentHTML('beforeend', (actors));
        place.insertAdjacentHTML('beforeend', (directors));
        place.insertAdjacentHTML('beforeend', (runtime));
        place.insertAdjacentHTML('beforeend', (ageRating));
        place.insertAdjacentHTML('beforeend', (genres));
        place.insertAdjacentHTML('beforeend', (userRatingsImdb));
        place.insertAdjacentHTML('beforeend', (userRatingsKinoP));
        ;
})
.catch(error => console.log(error));