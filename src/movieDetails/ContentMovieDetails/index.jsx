import {
  DivContent,
  DivCarousel2,
  DivTab,
} from "../cssMovieDetails";
import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { NavLink, Route, Switch } from "react-router-dom";
import Summery from "./summery.jsx";

function PageContentMovieDetails() {
  const item = {
    itemImg: [
      {
        img: "../imgMovieDetailsPulic/movie-details01.jpg",
      },
      {
        img: "../imgMovieDetailsPulic/movie-details02.jpg",
      },
      {
        img: "../imgMovieDetailsPulic/movie-details03.jpg",
      },
    ],
  };
  const options = {
    item: 3,
    margin: 8,
    loop: true,
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
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
  return (
    <DivContent>

      <h3>Photos</h3>
      <DivCarousel2>
        <OwlCarousel options={options}>
          {item.itemImg.map((item) => (
            <img src={item.img} />
          ))}
        </OwlCarousel>
      </DivCarousel2>
      <DivTab>
        <ul>
          <li>
            <NavLink to="/movie-details/summery">summery</NavLink>
          </li>
          <li>
            <NavLink to="/movie-details/2">user review</NavLink>
          </li>
        </ul>
      </DivTab>
      <Switch>
        <Route path="/movie-details/summery">
          <Summery></Summery>
        </Route>
      </Switch>
    </DivContent>
  );
}

export default PageContentMovieDetails;
