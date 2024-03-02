import checkResponse from './checkResponse.js';

export const BASE_URL = 'https://api.diploma.tmalceva.nomoredomainsmonster.ru';

// запрос для регистрации
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then(checkResponse);
}

// запрос для авторизации
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
  .then((data) => {
    if (data.token){
      localStorage.setItem('token', data.token);
      return data;
    }
  })
}

// запрос для проверки валидности токена
export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
  .then(checkResponse)
  .then(data => data)
}

// получение информации о пользователе
export const getInfoProfile = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
  }).then(checkResponse)
}

// редактирование профиля
export const updateProfile = (name, email, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    })
  }).then(checkResponse)
}

// запрос на сохраненные фильмы
export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(checkResponse)
}

// запрос на добавление фильма
export const postNewMovie = (movieData, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: movieData.country,
      director: movieData.director,
      duration: movieData.duration,
      year: movieData.year,
      description: movieData.description,
      image: `https://api.nomoreparties.co/${movieData.image.url}`,
      trailerLink: movieData.trailerLink,
      nameRU: movieData.nameRU,
      nameEN: movieData.nameEN,
      thumbnail: `https://api.nomoreparties.co/${movieData.image.url}`,
      movieId: movieData.id
    })
  }).then(checkResponse)
}

// запрос на удаление фильма
export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(checkResponse)
}