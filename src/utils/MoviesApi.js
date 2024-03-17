export class MoviesApi {
  constructor (config) {
    this._url = config.url;
  }

  // проверка запроса
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // загрузка фильмов
  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co',
});

export default moviesApi;