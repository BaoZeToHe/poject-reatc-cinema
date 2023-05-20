import {
  Div_Tab,
  Div_Carousel2,
  Card_thumb,
  Card_content,
  Div_header,
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
      <Div_Tab>
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
      </Div_Tab>
      <Div_Tab>
        <Div_header className="relative">
          <h3>cast</h3>
        </Div_header>
        <Div_Carousel2>
          <OwlCarousel options={options} item = {1}>
            {cast.ValueCast.map((item) => (
              <div>
                <Card_thumb>
                  <a>
                    <img src={item.img} />
                  </a>
                </Card_thumb>
                <Card_content>
                  <h6>{item.name}</h6>
                  <span>{item.role}</span>
                  <p>{item.shoulder}</p>
                </Card_content>
              </div>
            ))}
          </OwlCarousel>
        </Div_Carousel2>
      </Div_Tab>
      <Div_Tab>
        <Div_header className="relative">
          <h3>crew</h3>
        </Div_header>
        <Div_Carousel2>
          <OwlCarousel options={options} item={1}>
            {cast.ValueCrew.map((item) => (
              <div>
                <Card_thumb>
                  <a>
                    <img src={item.img} />
                  </a>
                </Card_thumb>
                <Card_content>
                  <h6>{item.name}</h6>
                  <span>{item.role}</span>
                  <p>{item.shoulder}</p>
                </Card_content>
              </div>
            ))}
          </OwlCarousel>
        </Div_Carousel2>
      </Div_Tab>
    </div>
  );
}
export default Summery;
