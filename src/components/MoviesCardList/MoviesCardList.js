// import { useCallback } from 'react';
import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import {
  WIDTH_DESKTOP,
  WIDTH_TABLET,
  // WIDTH_MOBILE,
  DESKTOP_CARDS,
  TABLET_CARDS,
  MOBILE_CARDS,
  DESKTOP_LOAD_MOVIES,
  TABLET_LOAD_MOVIES,
  MOBILE_LOAD_MOVIES
} from '../../utils/constants';

function MoviesCardList({
  foundMovies,
  setFoundMovies,
  handleMovieLike,
  likedMovies,
  deleteMovie 
}) {

  const location = useLocation();
  const [notFoundText, setNotFoundText] = React.useState('');
  // const [isButtonVisible, setButtonVisible] = React.useState(true);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [loadMovies, setLoadMovies] = React.useState(0);
  const [showMovies, setShowMovies] = React.useState(0);
  // const showMoviesArray = foundMovies.slice(0, showMovies);

  // количество фильмов на странице
  React.useEffect(() => {
    if (windowWidth >= WIDTH_DESKTOP) {
      setShowMovies(DESKTOP_CARDS);
      setLoadMovies(DESKTOP_LOAD_MOVIES);
    }
    else if (windowWidth >= WIDTH_TABLET) {
      setShowMovies(TABLET_CARDS);
      setLoadMovies(TABLET_LOAD_MOVIES);
    }
    else {
      setShowMovies(MOBILE_CARDS);
      setLoadMovies(MOBILE_LOAD_MOVIES);
    }
  }, [windowWidth, setShowMovies])

  // React.useEffect(() => {
  //   displayMovies();
  // })

  console.log(showMovies)
  console.log(loadMovies)  
  // console.log(showMoviesArray)
  console.log(foundMovies)

  // React.useEffect(() => {
  //   if (location.pathname === '/movies') {
  //     setF
  //   }
  // })

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  React.useEffect(() => {
    setTimeout(() => {
      changeWindowWidth();
    }, 1000);
  })

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);
    return () => {
      window.removeEventListener('resize', changeWindowWidth);
      setWindowWidth(window.innerWidth);
    }
  })


  React.useEffect(() => {
    if (foundMovies.length === 0) {
      setNotFoundText('Ничего не найдено');
      // setButtonVisible(false);
    }
  }, [foundMovies]);

  const handleMoreButton = () => {
   setShowMovies(showMovies + loadMovies);
  }

  return(
    <>
      {foundMovies.length !==0 ? (
        <>
          <section className='movies__container'>
            {location.pathname === '/movies' ? (
              <>
                {foundMovies.slice(0, showMovies).map(item => (
                  <MoviesCard
                    key={item.id || item.movieId}
                    movie={item}
                    handleMovieLike={handleMovieLike}
                    likedMovies={likedMovies}
                    deleteMovie={deleteMovie}
                  />
                ))}
              </>
            ) : (
              <>
                {foundMovies.map(item => (
                  <MoviesCard
                    key={item.id || item.movieId}
                    movie={item}
                    handleMovieLike={handleMovieLike}
                    likedMovies={likedMovies}
                    deleteMovie={deleteMovie}
                  />
                ))}
              </>
            )}
            {/* {foundMovies.map(item => (
              <MoviesCard
                key={item.id || item.movieId}
                movie={item}
                handleMovieLike={handleMovieLike}
                likedMovies={likedMovies}
                deleteMovie={deleteMovie}
              />
            ))} */}
            </section>
            {location.pathname === '/movies' &&  showMovies < foundMovies.length && (
              <button className='movies__button-more' onClick={handleMoreButton}>Ещё</button>
            )} 
        </>
           )
            : (
            <p className='movies__not-found'>{notFoundText}</p>
            )
      } 
    </>
  )
}

export default MoviesCardList;