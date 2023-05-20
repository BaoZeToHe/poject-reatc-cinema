import { Img, H5, Li, Div } from "./cssMovieGrid";

function CardGridMovie(progs) {
  return (
    <Div>
      <div className="overflow-hidden">
        <a>
          <Img src={progs.content.img} />
        </a>
      </div>
      <div className="px-5">
        <H5 >{progs.content.name}</H5>
        <ul className="flex py-5 text-[#dbe2fb] text-base">
          <Li>
            <div>
              <img src="./imgContentHomePage/tomato.png" />
            </div>
            {progs.content.tomato}%
          </Li>
          <Li>
            <div >
              <img src="./imgContentHomePage/cake.png" />
            </div>
            {progs.content.like}%
          </Li>
        </ul>


      </div>

    </Div>
  );
}
export default CardGridMovie