import {
  DivTab,
  DivCarousel2,
  CardThumb,
  CardContent,
  DivHeader,
} from "../cssMovieDetails";
import OwlCarousel from "react-owl-carousel2";

function Summery() {
  const cast = {
    ValueCast: [
      {
        img: "../imgCast/MovieVenus/cast01.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
      {
        img: "../imgCast/MovieVenus/cast02.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
      {
        img: "../imgCast/MovieVenus/cast03.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
      {
        img: "../imgCast/MovieVenus/cast04.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
    ],
    ValueCrew: [
      {
        img: "../imgcrew/MovieVenus/cast05.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
      {
        img: "../imgcrew/MovieVenus/cast06.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
      {
        img: "../imgcrew/MovieVenus/cast07.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
      {
        img: "../imgcrew/MovieVenus/cast08.jpg",
        role: "Actor",
        name: "As quicksilver",
        shoulder: "As Richie Tozier",
      },
    ],
  };
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
        items: 4
      }
    }
  };  
  return (
    <div>
      <DivTab>
        <h3>Synopsis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vehicula eros sit amet est tincidunt aliquet. Fusce laoreet ligula ac
          ultrices eleifend. Donec hendrerit fringilla odio, ut feugiat mi
          convallis nec. Fusce elit ex, blandit vitae mattis sit amet, iaculis
          ac elit. Ut diam mauris, viverra sit amet dictum vel, aliquam ac quam.
          Ut mi nisl, fringilla sit amet erat et, convallis porttitor ligula.
          Sed auctor, orci id luctus venenatis, dui dolor euismod risus, et
          pharetra orci lectus quis sapien. Duis blandit ipsum ac consectetur
          scelerisque.
        </p>
      </DivTab>
      <DivTab>
        <DivHeader className="relative">
          <h3>cast</h3>
        </DivHeader>
        <DivCarousel2>
          <OwlCarousel options={options} item = {1}>
            {cast.ValueCast.map((item) => (
              <div>
                <CardThumb>
                  <a>
                    <img src={item.img} />
                  </a>
                </CardThumb>
                <CardContent>
                  <h6>{item.name}</h6>
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
            {cast.ValueCrew.map((item) => (
              <div>
                <CardThumb>
                  <a>
                    <img src={item.img} />
                  </a>
                </CardThumb>
                <CardContent>
                  <h6>{item.name}</h6>
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
