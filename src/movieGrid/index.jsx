import { Body, H1ContentMovieGrid, DivContent, BgMovieGrid, PContentMovieGrid, DivListMovie } from "./cssMovieGrid";
import SearchMovie from "../Search_Header";
import ContentMovieGrid from "./ContentMovieGrid";
function MovieGrid() {
  return (
    <div className="bg-[#001232]  ">
      <Body>
        <BgMovieGrid></BgMovieGrid>
        <DivContent>
          <H1ContentMovieGrid>
            get <span className="text-green">movie</span> tick
          </H1ContentMovieGrid>
          <PContentMovieGrid>
            Buy movie tickets in advance, find movie times watch trailers, read
            movie reviews and much more
          </PContentMovieGrid>
        </DivContent>
      </Body>
      <SearchMovie></SearchMovie>
      <DivListMovie >
        <ContentMovieGrid></ContentMovieGrid>
      </DivListMovie>
    </div>
  );
}

export default MovieGrid;
