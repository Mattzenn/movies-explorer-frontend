class MainApi {
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

    //получение информации о пользователе с сервера
    getProfileInfo(token) {
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: {
          ...this.headers,
          Authorization: `Bearer ${token}`,
        },
      }).then(this._checkResponse);
    }

    //передача новой информации о пользователе на сервер
    putProfileInfo(name, email, token) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          ...this.headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      }).then(this._checkResponse);
    }

   //получение карточек с сервера
   getAllCard(token) {
      return fetch(`${this._url}/movies`, {
        method: "GET",
        headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
       },
       }).then(this._checkResponse);
    }

  //добавление карточки на сервер
  addCard(data, token) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      }),
    }).then(this._checkResponse);
  }

  //удаление карточки с сервера
  removeCard(cardId, token) {
    return fetch(`${this._url}/movies/${cardId}`, {
      method: "DELETE",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}
  //запись всего класса Api в переменную и её импорт
  const mainApi = new MainApi({
    url: "https://api.mattzenn-movies.nomoredomains.rocks",
    headers: {
      "Content-type": "application/json",
    },
  });

  export default mainApi;