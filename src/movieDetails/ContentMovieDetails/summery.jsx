import {
  DivTab,
  DivCarousel2,
  CardThumb,
  CardContent,
  DivHeader,
} from "../cssMovieDetails";
import OwlCarousel from "react-owl-carousel2";

function Summery(progs) {
  const options = {
    autoplay: true,
    autoplayTimeout : 1000,
    margin: 2,
    loop: true,
    loop: true,
    navText: [
      '<h1 style = "position : absolute ; top : 0 ; right : 0 ; color : white" >>></h1>',
      '<h1 style = "position : absolute ; top : 0 ; right : 30px ; color : white" ><<</h1>',
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  };  
  return (
    <div>
      <DivTab>
        <h3>Synopsis</h3>
        <p>
          {progs.content}
        </p>
      </DivTab>
      <DivTab>
        <DivHeader className="relative">
          <h3>cast</h3>
        </DivHeader>
        <DivCarousel2>
          <OwlCarousel options={options} item = {1}>
            {progs.cast.map((item) => (
              <div>
                <CardThumb>
                  <a>
                    <img src={item.img_cast} />
                  </a>
                </CardThumb>
                <CardContent>
                  <h6>{item.name_cast}</h6>
                  <span>{item.role}</span>
                  <p>{item.shoulder}</p>
                </CardContent>
              </div>
            ))}
          </OwlCarousel>
        </DivCarousel2>
      </DivTab>
      <DivTab>
        <DivHeader className="relative">
          <h3>crew</h3>
        </DivHeader>
        <DivCarousel2>
          <OwlCarousel options={options} item={1}>
            {progs.crow.map((item) => (
              <div>
                <CardThumb>
                  <a>
                    <img src={item.img_crow} />
                  </a>
                </CardThumb>
                <CardContent>
                  <h6>{item.name_crow}</h6>
                  <span>{item.role}</span>
                  <p>{item.shoulder}</p>
                </CardContent>
              </div>
            ))}
          </OwlCarousel>
        </DivCarousel2>
      </DivTab>
    </div>
  );
}
export default Summery;
