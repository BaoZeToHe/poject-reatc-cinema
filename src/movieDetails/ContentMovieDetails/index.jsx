import {
  DivContent,
  DivCarousel2,
  DivTab,
} from "../cssMovieDetails";
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel2";
import { NavLink, Route, Switch, useParams }  from "react-router-dom";
import Summery from "./summery.jsx";

function PageContentMovieDetails(progs) {
  let { id_movie } = useParams();
  const options = {
    item: 3,
    margin: 20,
    nav: true,
    navText: [
      '<h1 style = " display : none">Hello Style!</h1>',
      '<h1 style = " display : none">Hello Style!</h1>',
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1024: {
        items: 3
      },

    }
  };  
  useEffect(() => {
    window.location.href = `/movie-details/${id_movie}/summery/#top`;
  }, [id_movie])
  return (
    <DivContent>
      <h3>Photos</h3>
      <DivCarousel2>
        <OwlCarousel options={options}>
          {progs.item.map((item) => (
            <img src={item} />
          ))}
        </OwlCarousel>
      </DivCarousel2>
      <DivTab>
        <ul>
          <li>
            <NavLink to={`/movie-details/${id_movie}/summery`}>summery</NavLink>
          </li>
          <li>
            <NavLink to={`/movie-details/${id_movie}/2`}>user review</NavLink>
          </li>
        </ul>
      </DivTab>
      <Switch>
        <Route path={`/movie-details/${id_movie}/summery`}>
          <Summery content = {progs.content} cast = {progs.cast}  crow = {progs.crow}></Summery>
        </Route>
      </Switch>
    </DivContent>
  );
}

export default PageContentMovieDetails;
