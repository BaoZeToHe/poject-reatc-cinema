import CardGridMovie from "../CardGridMovie";
import {
  CssCard,
  DivFilter,
  DivFilterMain,
  DivFilterItem,
  SelectFilter,
  UlFilter,
  DivLeftFilter,
  ButtonSplitPage,
} from "../cssMovieGrid";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getMoviesRequest } from "../../redux/Slice/sliceDataMovie.js";
import {
  NavLink,
  Route,
  useLocation,
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom";
import history from "../../services/history";

function PageGirdMovie() {
  const location = useLocation();
  let change = 1 ;
  const [meta, setMeta] = useState({
    _limit: 3,
    _page: 1,
    _totalRows: 0,
  });
 
  let array_product = [];
  const dispatch = useDispatch();
  let { page } = useParams();
  const data = useSelector((state) => state.DataMovieSlice.data);
  const pagination = useSelector((state) => state.DataMovieSlice.pagination);
  let number_button = Math.ceil(pagination._totalRows / pagination._limit);
  useEffect(() => {
    dispatch(getMoviesRequest(meta));
  }, [meta]);
  useEffect(() => {
    setMeta((meta) => ({ ...meta, _page: page }));
  }, [location]);
  useEffect(() => {
    history.push(`/movie-List/${change}/`);
  }, [change]);

  function sortAge(event) {
    if (event.target.value != null) {
      setMeta((meta) => ({
        ...meta,
        age_gte: event.target.value,
        age_lte: 60,
      }));
    }
  }

  for (let index = 0; index < number_button; index++) {
    array_product.push(index);
  }

  return (
    <>
      <DivFilter>
        <DivFilterMain>
          <DivLeftFilter>
            <DivFilterItem>
              <span className="mr-5">Show :</span>
              <SelectFilter onChange={sortAge}>
                <option value="">Chọn Độ Tuổi</option>
                <option value="0">P</option>
                <option value="13">C13</option>
                <option value="16">C16</option>
                <option value="18">C18</option>
              </SelectFilter>
            </DivFilterItem>
            <DivFilterItem>
              <span className="mr-5">Sort By :</span>
              <SelectFilter>
                <option value="showing">Now showing</option>
                <option value="exclusive">exclusive</option>
                <option value="trending">trending</option>
                <option value="most-view">most view</option>
              </SelectFilter>
            </DivFilterItem>
          </DivLeftFilter>
          <UlFilter>
            <li>Gird</li>
            <li>Doc</li>
          </UlFilter>
        </DivFilterMain>
      </DivFilter>
      <CssCard>
        {data.map((Item) => (
          <CardGridMovie content={Item} />
        ))}
      </CssCard>
      <ButtonSplitPage>
        {array_product.map((index, data) => (
          <NavLink
            to={`/movie-List/${index + 1}`}
            style={(isActive) => ({
              background: isActive
                ? "-webkit-linear-gradient(169deg, #5560ff 0%, #ff4343 100%)"
                : "none",
            })}
          >
            {index + 1}
          </NavLink>
        ))}
      </ButtonSplitPage>
    </>
  );
}
export default PageGirdMovie;
