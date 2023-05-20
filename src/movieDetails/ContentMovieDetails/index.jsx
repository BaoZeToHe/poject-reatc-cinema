import {
  Div_Content,
  Div_offer_item,
  Div_Carousel2,
  Div_Tab,
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
  const a = '<h1 style = " display : none">Hello Style!</h1>';
  const options = {
    item: 3,
    margin: 8,
    loop: true,
    nav: true,
    navText: [
      '<h1 style = " display : none">Hello Style!</h1>',
      '<h1 style = " display : none">Hello Style!</h1>',
    ],
  };
  return (
    <Div_Content>

      <h3>Photos</h3>
      <Div_Carousel2>
        <OwlCarousel options={options}>
          {item.itemImg.map((item) => (
            <img src={item.img} />
          ))}
        </OwlCarousel>
      </Div_Carousel2>
      <Div_Tab>
        <ul>
          <li>
            <NavLink to="/movie-details/summery">summery</NavLink>
          </li>
          <li>
            <NavLink to="/movie-details/2">user review</NavLink>
          </li>
        </ul>
      </Div_Tab>
      <Switch>
        <Route path="/movie-details/summery">
          <Summery></Summery>
        </Route>
      </Switch>
    </Div_Content>
  );
}
export default PageContentMovieDetails;
