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
export const postNewMovie = (country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: image,
      trailer: trailer,
      nameRU: nameRU,
      nameEN: nameEN,
      thumbnail: thumbnail,
      movieId: movieId
    })
  }).then(checkResponse)
}

// запрос на удаление фильма
export const deleteMovie = (token) => {
  return fetch(`${BASE_URL}/movies/_id`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(checkResponse)
}