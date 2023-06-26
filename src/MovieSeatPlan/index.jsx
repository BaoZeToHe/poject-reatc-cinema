import { useParams, Switch, Route } from "react-router-dom";
import {
  DivBackGround,
  DivContent,
  DivTag,
  DivPageTitle,
  DivContainer,
  DivPage,
  DivDate,
  DivSelect,
  DivMins,
} from "./CssMovieSeatPlan";
import ButtonComponent from "../button/button";
import { useEffect } from "react";
import { getMoviesRequest } from "../redux/Slice/sliceDataMovie";
import { getShowTimeRequest } from "../redux/Slice/sliceShowtTime";
import { useDispatch, useSelector } from "react-redux";
import PageChair from "./pageChair";
import PageCheckOut from "./PageCheckOut";

function DivInForMation() {
  let { id_movie, showtime, date } = useParams();
  let dispatch = useDispatch();
  let monthSlice = "";
  const dataMovie = useSelector((state) => state.DataMovieSlice.data);
  const dataShowTime = useSelector((state) => state.DataShowTime);
  let ValueDate = new Date();
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
  useEffect(() => {
    dispatch(
      getMoviesRequest({
        id: id_movie,
        _limit: 1,
      })
    );
    dispatch(
      getShowTimeRequest({
        id: showtime,
      })
    );
  }, [window.location.pathname]);
  return (
    <>
      <div className="bg-[#001232]">
        {dataMovie.map((item, index) => (
          <div>
            <DivBackGround>
              <DivContent>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <h3>{item.name}</h3>
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
                      {dataShowTime.data.map((item, index) => {
                        let date_show_time = new Date(item.time);
                        if (item.id == showtime) {
                          return (
                            <option id={item.id} selected>
                              {date_show_time.getHours() +
                                ":" +
                                date_show_time.getMinutes()}
                            </option>
                          );
                        } else {
                          if (
                            date_show_time.getDate() == ValueDate.getDate() &&
                            date_show_time.getHours() >= ValueDate.getHours() &&
                            date_show_time.getMinutes() + 5 >=
                              ValueDate.getMinutes()
                          ) {
                            return (
                              <option id={item.id}>
                                {date_show_time.getHours() +
                                  ":" +
                                  date_show_time.getMinutes()}
                              </option>
                            );
                          }
                        }
                      })}
                    </DivSelect>
                  </DivDate>
                  <DivMins>
                    <h3>05:00</h3>
                    <p>Mins Left</p>
                  </DivMins>
                </DivPage>
              </DivContainer>
            </DivPageTitle>
          </div>
        ))}
      </div>
      <>
        <Switch>
          <Route
            path="/movie-seat-plan/book-king/:id_movie/:showtime/:date"
            children={<PageChair />}
          />
          <Route
            path="/movie-seat-plan/check-out/:id_movie/:showtime/:date"
            children={<PageCheckOut data={dataMovie} dataShowTime={dataShowTime}/>}
          />
        </Switch>
      </>
    </>
  );
}

export default DivInForMation;
