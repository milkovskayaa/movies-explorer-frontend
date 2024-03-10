import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
// import {
//   WIDTH_DESKTOP,
//   WIDTH_TABLET,
//   WIDTH_MOBILE,
//   DESKTOP_CARDS,
//   TABLET_CARDS,
//   MOBILE_CARDS,
//   DESKTOP_LOAD_MOVIES,
//   TABLET_LOAD_MOVIES,
//   MOBILE_LOAD_MOVIES
// } from '../../utils/constants';

function MoviesCardList({
  foundMovies,
  setFoundMovies,
  handleMovieLike,
  likedMovies,
  deleteMovie 
}) {

  const location = useLocation;
  const [notFoundText, setNotFoundText] = React.useState('');
  const [isButtonVisible, setButtonVisible] = React.useState(true);
  // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // const [loadMovies, setLoadMovies] = React.useState(0);
  // const [showMovies, setShowMovies] = React.useState(0);

  console.log(foundMovies)
  console.log(likedMovies)

  // количество фильмов на странице
  // const displayMovies = () => {
  //   if (windowWidth >= WIDTH_DESKTOP) {
  //     setShowMovies(DESKTOP_CARDS);
  //   }
  //   else if (windowWidth >= WIDTH_TABLET) {
  //     setShowMovies(TABLET_CARDS);
  //   }
  //   else {
  //     setShowMovies(MOBILE_CARDS);
  //   }
  // }


  React.useEffect(() => {
    if (foundMovies.length === 0) {
      setNotFoundText('Ничего не найдено');
      setButtonVisible(false);
    }
    // else {
    //   displayMovies();
    // }
  }, [foundMovies]);

  return(
    <>
      {/* {location.pathname === '/movies' ? (
        <> */}
          {foundMovies.length !==0 ? (
            <>
            <section className='movies__container'>
              {foundMovies.map(item => (
                <MoviesCard
                  key={item.id || item.movieId}
                  movie={item}
                  handleMovieLike={handleMovieLike}
                  likedMovies={likedMovies}
                  deleteMovie={deleteMovie}
                />
              ))}
              </section>
              {location.pathname === '/movies' ? (
                <button className={`movies__button-more ${isButtonVisible ? '' : 'movies__button-more_hide'}`}>Ещё</button>
              ) : (
                ''
              )} 
            </>
           )
            : (
            <p className='movies__not-found'>{notFoundText}</p>
            )
          } 
        </>
      // ) : (
      
      // // {location.pathname === '/saved-movies' && (
      //   <>
      //     {likedMovies.length !==0 ? (
      //       <section className='movies__container'>
      //         {likedMovies.map(item => (
      //           <MoviesCard
      //             key={item.movieId}
      //             movie={item}
      //             handleMovieLike={handleMovieLike}
      //             likedMovies={likedMovies}
      //             deleteMovie={deleteMovie}
      //           />
      //         ))}
      //       </section>   
      //       )
      //       : (
      //       <p className='movies__not-found'>{notFoundText}</p>
      //       )
      //     }
      //   </>
      // )
      // }
    // </>  
  )
}

export default MoviesCardList;