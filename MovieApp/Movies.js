
const urlapi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const urlsearch = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
const msl = document.getElementById('moviest');
const txtsearch = document.getElementById('searchy');
const btn = document.getElementById('btnk');

Api(urlapi);
btn.addEventListener('click', function() {
  const word = txtsearch.value;
  if (word !== '') {
    Api(urlsearch + word);
  }
});
function Api(url) {
  msl.innerHTML = '';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      movies.forEach(movie => {
        const mele = document.createElement('div');
        mele.className = 'movie';
        mele.dataset.movieId = movie.id;
        mele.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
          <div class="rating">Rating : ${movie.vote_average}</div>
          <div class="overview">${movie.overview}</div>
        `;
        msl.appendChild(mele);
       mele.addEventListener('click', function() {
          const movieId = this.dataset.movieId;
          fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
            .then(response => response.json())
            .then(data => {
              const mele = document.createElement('div');
              mele.className = 'modal';
              mele.innerHTML = `
                <div class="modal-content">
                  <span class="close">&times;</span>
                  <h2>${data.title}</h2>
                  <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
                  <p>${data.overview}</p>
                </div>
              `;
              document.body.appendChild(mele);
              const closeButton = mele.querySelector('.close');
              closeButton.addEventListener('click', function() {
                mele.remove();
              });
            })
            .catch(error => {
              console.log(error);
            });
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
}

