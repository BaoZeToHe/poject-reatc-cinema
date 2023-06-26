import {
  DivContainer,
  DivSeatPlan,
  DivChairMovie,
  DiVh4,
  DiVh5,
  DivScreenThumb,
  ProceedBook,
  DivMainBook,
  DivBook,
  TagUL,
} from "./CssMovieSeatPlan";
import ImgTv from "./ImgMovieSeatPlan/screen-thumb.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ButtonComponent from "../button/button";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { getChairRequest } from "../redux/Slice/sliceDataChair";
import { getChairBySuccess } from "../redux/Slice/sliceArrayChair";
import { getDataChairByRequest } from "../redux/Slice/sliceDataSeverChair.js";

function PageChair() {
  let { id_movie, showtime, date } = useParams();
  let totalPriceMovie = 0;
  let NewArray = [];
  let dispatch = useDispatch();
  const data = useSelector((state) => state.DataChairSlice.data);
  const data_Chair_Bought = useSelector(
    (state) => state.DataChairSeverBy.dataChairSeverBy
  );
  const [dataChair, setDataChair] = useState({ chair_Sate: data });
  const [dataChairBy, setDataChairBY] = useState([]);
    console.log(dataChairBy);
  let [arrayChairBuy, setChairBuy] = useState([]);
  useEffect(() => {
    dispatch(getChairRequest({}));
    dispatch(
      getDataChairByRequest({
        id_showtime: showtime,
      })
    );
  }, []);
  useEffect(() => {
    data_Chair_Bought.map((item1) => {
      item1.byChair.map((item) => {
        setDataChairBY((dataChairBought) => [item, ...dataChairBought]);
      });
    });
  }, [data]);
  useEffect(() => {

  // setDataChair(({ boardState }) => {
  //   boardState: boardState.map((row, i) => {
  //     row.map((tile, i) => {
  //       dataChairBy.map((data_chair_by , index) => {
  //         if (data_chair_by.id == tile.id){
  //           return {...tile , buy : true}
  //         }
  //       })
  //     });
  //   });
  // });
  })
  console.log(dataChair);
  function byTicket() {
    dispatch(
      getChairBySuccess({
        dataChairBy: arrayChairBuy,
        totalPrice: totalPriceMovie,
      })
    );
  }
  function buyChairMovie(value) {
    if (arrayChairBuy.includes(value) == true) {
      const newList = arrayChairBuy.filter((item) => item !== value);
      setChairBuy(newList);
    } else {
      setChairBuy((valueChairBuy) => [...valueChairBuy, value]);
    }
  }

  return (
    <>
      <DivSeatPlan>
        <DiVh4>screen</DiVh4>
        <DivScreenThumb>
          <img src={ImgTv} />
        </DivScreenThumb>
        <DiVh5>silver plus</DiVh5>
        <DivChairMovie>
          {dataChair.chair_Sate.map((item, index) => {
            console.log(item);
            return (
              <TagUL>
                <span>{item[0].name.slice(0, 1)}</span>
                {item.map((value, index) => {
                  return (
                    <li
                      style={{
                        backgroundImage:
                          value.chair == "single"
                            ? arrayChairBuy.includes(value)
                              ? `url("https://pixner.net/boleto/demo/assets/images/movie/seat01-booked.png")`
                              : `url("https://pixner.net/boleto/demo/assets/images/movie/seat01.png")`
                            : arrayChairBuy.includes(value)
                            ? `url("https://pixner.net/boleto/demo/assets/images/movie/seat02-booked.png")`
                            : `url("https://pixner.net/boleto/demo/assets/images/movie/seat02.png")`,
                        width: value.chair == "single" ? "35px" : "70px",
                      }}
                      onClick={() => {
                        buyChairMovie(value);
                      }}
                    >
                      {value.name}
                    </li>
                  );
                })}
                <span>{item[0].name.slice(0, 1)}</span>
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
              <NavLink
                to={`/movie-seat-plan/check-out/${id_movie}/${showtime}/${date}`}
              >
                <ButtonComponent
                  content="proceed"
                  backGround="linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
                  onClick={byTicket}
                ></ButtonComponent>
              </NavLink>
            </DivMainBook>
          </ProceedBook>
        </DivContainer>
      </DivSeatPlan>
    </>
  );
}

export default PageChair;
//https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png
