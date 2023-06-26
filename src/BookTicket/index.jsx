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
} from "./CssBookTicket";
import IconCity from "./iconSelect/city.png";
import IconDate from "./iconSelect/date.png";
import IconCinema from "./iconSelect/cinema.png";
import IconExp from "./iconSelect/exp.png";
import IconAdvertisement from "./iconSelect/banner03.jpg";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "../redux/Slice/sliceDataMovie";
import { getShowTimeRequest } from "../redux/Slice/sliceShowtTime";
import { getLocalLogin } from "../untill/loginLocal.js";
import history from "../services/history.jsx";

function PageBookTicket() {
  let { id_movie } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataMovieSlice.data);
  const dataShowTime = useSelector((state) => state.DataShowTime);
  if (getLocalLogin() == null) {
    alert("Bạn Vui Lòng Đăng Nhập Để Có Thể Mua Được Vé");
    history.push("/create");
  }
  useEffect(() => {
    if (getLocalLogin()) {
      dispatch(
        getMoviesRequest({
          id: id_movie,
          _limit: 1,
        })
      );
      dispatch(getShowTimeRequest({}));
    }
  }, [id_movie, getLocalLogin()]);

  let newDate = new Date();
  let arrayDate = [];
  let Date_1 = Number(newDate.getDate());
  let Month = Number(newDate.getMonth()) + 1;
  const [ValueDate, setDate] = useState(
    newDate.getFullYear() + "-" + Month + "-" + Date_1
  );
  let Date_day = Date_1 + 3;
  for (Date_1; Date_1 < Date_day; Date_1++) {
    arrayDate.push(newDate.getFullYear() + "-" + Month + "-" + Date_1);
  }
  const date = useRef("date");
  function setValueDate(item) {
    setDate((Date) => (Date = date.current.value));
  }
  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <BackGround
              style={{ backgroundImage: `url(${item.img_backGround})` }}
            >
              <DivContainer>
                <DivDetailsBannerContent>
                  <h3>{item.name}</h3>
                  <div className="tags">
                    <a href="#">{item.performer}</a>
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
                      <option>lam lai</option>
                    </select>
                  </DivFromGround>
                  <DivFromGround>
                    <DivFromThumb>
                      <img src={IconDate} />
                    </DivFromThumb>
                    <span>date</span>
                    <select ref={date} onChange={setValueDate}>
                      <option>Date</option>
                      {arrayDate.map((item, index) => {
                        let today = new Date(item);
                        if (today.getDate() == newDate.getDate()) {
                          return (
                            <option value={item} selected>
                              {item}
                            </option>
                          );
                        } else {
                          return <option value={item}>{item}</option>;
                        }
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
                    </select>
                  </DivFromGround>
                  <DivFromGround>
                    <DivFromThumb>
                      <img src={IconExp} />
                    </DivFromThumb>
                    <span>Experience</span>
                    <select>
                      <option value="English-2D">English-2D</option>
                    </select>
                  </DivFromGround>
                </DivFromSelect>
              </DivContainer>
            </DivBookSection>
            <DivTicket>
              <DivContainer>
                <DivLoadTicket>
                  <DivTicketBook>
                    {dataShowTime.data.map((item) => {
                      let date_show_time = new Date(item.time);
                      let dateSelect = new Date(ValueDate);
                      if (date_show_time.getTime() + 15 >= newDate.getTime() && date_show_time.getDay() == dateSelect.getDay()) {
                        return (
                          <NavLink
                            to={`/movie-seat-plan/book-king/${id_movie}/${item.id}/${ValueDate}`}
                          >
                            {date_show_time.getHours() +
                              ":" +
                              date_show_time.getMinutes()}
                          </NavLink>
                        );
                      } else {
                        return false
                      }
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
      })}
    </>
  );
}

export default PageBookTicket;
