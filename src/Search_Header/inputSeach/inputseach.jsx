import {
  DivMainInput,
  DivInput,
  InputSearch,
  DivImgInputSearch,
  InputSearchContentHomePage,
  SelectInput,
} from "../cssSearchHeader";
import { SearchOutlined } from "@ant-design/icons";
import Icon1 from "./iconinputseach/cinema.png";
import Icon2 from "./iconinputseach/city.png";
import Icon3 from "./iconinputseach/date.png";
import sliceDataMovie, {
  getMoviesRequest,
} from "../../redux/Slice/sliceDataMovie";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function PageInputSearch() {
  let newDate = new Date();
  let arrayDate = [];
  let Date_1 = Number(newDate.getDate());
  let Month = Number(newDate.getMonth()) + 1;
  let Date_day = Date_1 + 3;
  for (Date_1; Date_1 < Date_day; Date_1++) {
    arrayDate.push(newDate.getFullYear() + "-" + Month + "-" + Date_1);
  }
  const dispatch = useDispatch();
  const [meta, setMeta] = useState({
    _limit: 3,
    _totalRows: 0,
  });
  function fitterSearch(event) {
    setTimeout(() => {
      setMeta((meta) => ({ ...meta, q: event.target.value }));
    }, 1500);
  }
  function fitterSelectCity(event) {
    setMeta((meta) => ({ ...meta, nation: event.target.value }));
  }
  function fitterSelectDate(event) {
    console.log(event.target.value);
  }
  useEffect(() => {
    dispatch(getMoviesRequest(meta));
  }, [meta]);
  return (
    <InputSearch>
      <DivMainInput>
        <DivInput>
          <InputSearchContentHomePage
            placeholder="Search for Movie"
            onChange={fitterSearch}
          />
          <a className="text-white absolute top-2.5 right-2">
            <SearchOutlined />
          </a>
        </DivInput>
        <SelectInput>
          <DivImgInputSearch>
            <img src={Icon1} className="w-full h-full" />
          </DivImgInputSearch>
          <span className="text-green">City</span>
          <select
            className="bg-transparent text-white"
            onChange={fitterSelectCity}
          >
            <option value="" className="text-black">
              Chọn Quốc Gia
            </option>
            <option value="usa" className="text-black">
              Usa
            </option>
            <option value="japan" className="text-black">
              Nhật Bản
            </option>
          </select>
        </SelectInput>
        <SelectInput>
          <DivImgInputSearch>
            <img src={Icon2} />
          </DivImgInputSearch>
          <span className="text-green">Date</span>
          <select
            className="bg-transparent text-white"
            onChange={fitterSelectDate}
          >
            <option value="" className="text-black">
              Chọn Ngày
            </option>
            {arrayDate.map((item) => {
              return (
                <option value={item} className="text-black">
                  {item}
                </option>
              );
            })}
          </select>
        </SelectInput>
        <SelectInput>
          <DivImgInputSearch>
            <img src={Icon3} />
          </DivImgInputSearch>
          <span className="text-green">Cinema</span>
          <select className="bg-transparent text-white">
            <option className="text-black">Awaken</option>
          </select>
        </SelectInput>
      </DivMainInput>
    </InputSearch>
  );
}
export default PageInputSearch;
