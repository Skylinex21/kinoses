let episodes = [
    { id: "dQw4w9WgXcQ", title: "Первая серия: Название" },
    { id: "dQw4w9WgXcQ", title: "Вторая серия: Название" }
];

// Загрузка сохранённых фильмов из localStorage
function loadMovies() {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
        const movies = JSON.parse(savedMovies);
        movies.forEach(movie => {
            displayMovieCard(movie.id, movie.title); 
        });
    } else {
        console.log("Нет сохраненных фильмов.");
    }
}

// Отображение карточки фильма
function displayMovieCard(videoId, videoTitle) {
    const moviesList = document.getElementById("moviesList");

    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    if (videoId.length === 11) { // Это YouTube видео
        const youtubeThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        movieCard.style.backgroundImage = `url(${youtubeThumbnailUrl})`;
    }

    movieCard.innerHTML = `
        <h3>${videoTitle}</h3>
        <p>ID: ${videoId}</p>
        <button onclick="loadMovie('${videoId}', '${videoTitle}')">Смотреть</button>
        <button onclick="deleteMovie('${videoId}')">Удалить</button>
    `;

    moviesList.appendChild(movieCard);
}

// Удаление фильма
function deleteMovie(videoId) {
    episodes = episodes.filter(episode => episode.id !== videoId);
    const moviesList = document.getElementById("moviesList");
    moviesList.innerHTML = '';
    episodes.forEach(episode => displayMovieCard(episode.id, episode.title));
    saveMovies();
}

// Сохранение фильмов в localStorage
function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(episodes));
}

// Загружаем фильмы при старте
window.onload = function() {
    loadMovies();
};

