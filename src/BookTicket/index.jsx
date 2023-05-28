import {
  BackGround,
  DivContainer,
  DivDetailsBannerContent,
  DivBookSection,
  DivFromSelect,
  DivFromThumb,
  DivFromGround,
  DivTicket,
  DivLoadTicket,
  DivTicketBook,
  DivTicketADerTiSeMeNt,
  DivAlert,
} from "./CssBookTicket";
import IconCity from "./iconSelect/city.png";
import IconDate from "./iconSelect/date.png";
import IconCinema from "./iconSelect/cinema.png";
import IconExp from "./iconSelect/exp.png";
import IconAdvertisement from "./iconSelect/banner03.jpg";
import { Button, Drawer, Space } from "antd";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function PageBookTicket() {
  let newDate = new Date();
  let arrayDate = [];
  let arrayTicket = ["09:40", "13:45", "15:45", "19:50", "20:50", "22:10"];
  let Date_1 = Number(newDate.getDate());
  let Month = Number(newDate.getMonth()) + 1;
  let Date_day = Date_1 + 3;
  for (Date_1; Date_1 < Date_day; Date_1++) {
    arrayDate.push(newDate.getFullYear() + "-" + Month + "-" +  Date_1 );
  }
  const date = useRef("date");
  const [ValueDate, setDate] = useState(date.current.value)
  function setValueDate(item){ 
    setDate(Date => ( Date = date.current.value ))
  }
  return (
    <>
      <BackGround>
        <DivContainer>
          <DivDetailsBannerContent>
            <h3>venus</h3>
            <div className="tags">
              <a href="#0">English</a>
              <a href="#0">Hindi</a>
              <a href="#0">Telegu</a>
              <a href="#0">Tamil</a>
            </div>
          </DivDetailsBannerContent>
        </DivContainer>
      </BackGround>
      <DivBookSection>
        <DivContainer>
          <DivFromSelect>
            <DivFromGround>
              <DivFromThumb>
                <img src={IconCity} />
              </DivFromThumb>
              <span>city</span>
              <select>
                <option value="london">London</option>
                <option value="dhaka">dhaka</option>
                <option value="rosario">rosario</option>
                <option value="madrid">madrid</option>
                <option value="koltaka">kolkata</option>
                <option value="rome">rome</option>
                <option value="khoksa">khoksa</option>
              </select>
            </DivFromGround>
            <DivFromGround>
              <DivFromThumb>
                <img src={IconDate} />
              </DivFromThumb>
              <span>date</span>
              <select ref = {date} onChange={setValueDate}>
                <option>Date</option>
                {arrayDate.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </DivFromGround>
            <DivFromGround>
              <DivFromThumb>
                <img src={IconCinema} />
              </DivFromThumb>
              <span>cinema</span>
              <select>
                <option value="Awaken">Awaken</option>
                <option value="Venus">Venus</option>
                <option value="wanted">wanted</option>
                <option value="joker">joker</option>
                <option value="fid">fid</option>
                <option value="kidio">kidio</option>
                <option value="mottus">mottus</option>
              </select>
            </DivFromGround>
            <DivFromGround>
              <DivFromThumb>
                <img src={IconExp} />
              </DivFromThumb>
              <span>Experience</span>
              <select>
                <option value="English-2D">English-2D</option>
                <option value="English-3D">English-3D</option>
                <option value="Hindi-2D">Hindi-2D</option>
                <option value="Hindi-3D">Hindi-3D</option>
                <option value="Telegu-2D">Telegu-2D</option>
                <option value="Telegu-3D">Telegu-3D</option>
              </select>
            </DivFromGround>
          </DivFromSelect>
        </DivContainer>
      </DivBookSection>
      <DivTicket>
        <DivContainer>
          <DivLoadTicket>
            <DivTicketBook>
              {arrayTicket.map((item) => {
                let url = "/movie-seat-plan/" + item + "/" + ValueDate
                return <NavLink to={url}>{item}</NavLink>;
              })}
            </DivTicketBook>
            <DivTicketADerTiSeMeNt>
              <img src={IconAdvertisement} />
            </DivTicketADerTiSeMeNt>
          </DivLoadTicket>
        </DivContainer>
      </DivTicket>
    </>
  );
}

export default PageBookTicket;
