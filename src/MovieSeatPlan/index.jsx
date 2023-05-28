import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { BackGround } from "../BookTicket/CssBookTicket";
import {
  TagUL,
  DivBackGround,
  DivContent,
  DivTag,
  DivPageTitle,
  DivContainer,
  DivPage,
  DivDate,
  DivSelect,
  DivMins,
  DivSeatPlan,
  DivChairMovie,
  DiVh4,
  DiVh5,
  DivScreenThumb,
  ProceedBook,
  DivMainBook,
  DivBook,
} from "./CssMovieSeatPlan";
import ButtonComponent from "../button/button";
import ImgTv from "./ImgMovieSeatPlan/screen-thumb.png";
import { useEffect } from "react";

function DivMovieSeatPlan() {
  let { showtime, date } = useParams();
  let monthSlice = "";
  let x = false;
  let newArrayMovie = [[]];
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    " K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let totalPriceMovie = 0;

  let [arrayChairBuy, setChairBuy] = useState([]);
  let [arrayMovie, SetArrayMovie] = useState([
    [
      {
        id: 1,
        name: "A1",
        price: 75,
        chair: "single",
      },
      {
        id: 2,
        name: "A2",
        price: 75,
        chair: "single",
      },
      {
        id: 3,
        name: "A3",
        price: 75,
        chair: "single",
      },
      {
        id: 4,
        name: "A5 A6",
        price: 75,
        chair: "coupled",
      },
    ],
    [
      {
        id: 4,
        name: "B1",
        price: 75,
        chair: "single",
      },
      {
        id: 5,
        name: "B2",
        price: 75,
        chair: "single",
      },
      {
        id: 6,
        name: "B3",
        price: 75,
        chair: "single",
      },
      {
        id: 7,
        name: "B4 B5",
        price: 75,
        chair: "coupled",
      },
    ],
  ]);
  let ValueDate = new Date(date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (ValueDate.getMonth()) {
    monthSlice = monthNames[ValueDate.getMonth()].slice(0, 3);
  }
  function buyChairMovie(value) {
    if (arrayChairBuy.includes(value) == true) {
      const newList = arrayChairBuy.filter((item) => item !== value);
      setChairBuy(newList);
    } else {
      setChairBuy((valueChairBuy) => [...valueChairBuy, value]);
    }
  }
  console.log(arrayChairBuy);
  return (
    <div className="bg-[#001232]">
      <DivBackGround>
        <DivContent>
          <div style={{ position: "relative", zIndex: 10 }}>
            <h3>Venus</h3>
            <DivTag>
              <a>City Walk</a>
              <a>English - 2D</a>
            </DivTag>
          </div>
        </DivContent>
      </DivBackGround>
      <DivPageTitle>
        <DivContainer>
          <DivPage>
            <ButtonComponent
              content="Back"
              backGround="linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
            ></ButtonComponent>
            <DivDate>
              <span>{monthSlice}</span>
              <span>{ValueDate.getDate()} </span>
              <span>{ValueDate.getFullYear()}</span>
              <DivSelect>
                <option value="sc1">09:40</option>
                <option value="sc2">13:45</option>
                <option value="sc3">15:45</option>
                <option value="sc4">19:50</option>
              </DivSelect>
            </DivDate>
            <DivMins>
              <h3>05:00</h3>
              <p>Mins Left</p>
            </DivMins>
          </DivPage>
        </DivContainer>
      </DivPageTitle>
      <DivSeatPlan>
        <DiVh4>screen</DiVh4>
        <DivScreenThumb>
          <img src={ImgTv} />
        </DivScreenThumb>
        <DiVh5>silver plus</DiVh5>
        <DivChairMovie>
          {arrayMovie.map((item, index) => {
            return (
              <TagUL>
                <span>{alphabet[index]}</span>
                {item.map((value) => {
                  return (
                    <li
                      style={{
                        backgroundImage:
                          value.chair == "single"
                            ? `url("https://pixner.net/boleto/demo/assets/images/movie/seat01.png")`
                            : `url("https://pixner.net/boleto/demo/assets/images/movie/seat02.png")`,
                        width: value.chair == "single" ? "35px" : "70px",
                        backgroundColor: arrayChairBuy.includes(value)
                          ? "red"
                          : "transparent",
                      }}
                      onClick={() => {
                        buyChairMovie(value);
                      }}
                    >
                      {value.name}
                    </li>
                  );
                })}
                <span>{alphabet[index]}</span>
              </TagUL>
            );
          })}
        </DivChairMovie>
        <DivContainer>
          <ProceedBook>
            <DivMainBook>
              <DivBook>
                <span>You have Choosed Seat</span>
                {arrayChairBuy.map((item) => {
                  return <h4>{item.name + ", "} </h4>;
                })}
              </DivBook>
              <DivBook>
                <span>total price</span>
                {arrayChairBuy.forEach((item) => {
                  totalPriceMovie += item.price;
                })}
                <h4>{totalPriceMovie} $</h4>
              </DivBook>
              <ButtonComponent
                content="proceed"
                backGround="linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
              ></ButtonComponent>
            </DivMainBook>
          </ProceedBook>
        </DivContainer>
      </DivSeatPlan>
    </div>
  );
}

export default DivMovieSeatPlan;
