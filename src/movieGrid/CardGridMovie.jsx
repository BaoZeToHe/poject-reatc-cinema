import { Img, H5, Li, Div } from "./cssMovieGrid";
import { NavLink } from "react-router-dom";

function CardGridMovie(progs) {
  return (
    <Div>
      <NavLink to={`/movie-details/${progs.content.id}/summery/#top`}>
        <div className="overflow-hidden">
          <a>
            <Img src={progs.content.img_Main} />
          </a>
        </div>
        <div className="px-5">
          <H5>{progs.content.name}</H5>
          <ul className="flex py-5 text-[#dbe2fb] text-base">
            <Li>
              <div>
                <img src="https://res.cloudinary.com/djuhqvlld/image/upload/v1686745251/tomato_zqyfmh.png" />
              </div>
              {progs.content.tomato}%
            </Li>
            <Li>
              <div>
                <img src="https://res.cloudinary.com/djuhqvlld/image/upload/v1686745287/cake_koaqnu.png" />
              </div>
              {progs.content.like}%
            </Li>
          </ul>
        </div>
      </NavLink>
    </Div>
  );
}

export default CardGridMovie;
