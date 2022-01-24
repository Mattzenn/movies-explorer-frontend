class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this.headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
      return fetch(`${this._url}`, {
        method: "GET",
        headers: {
          ...this.headers,
        },
      }).then(this._checkResponse);
    }
}

//запись всего класса Api в переменную и её импорт
const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "content-type": "application/json",
  },
});

export default moviesApi;