import { DivMainInput, DivInput,  InputSearch, DivImgInputSearch, InputSearchContentHomePage, SelectInput } from "../cssSearchHeader";
import { SearchOutlined } from "@ant-design/icons";
import Icon1 from "./iconinputseach/cinema.png";
import Icon2 from "./iconinputseach/city.png";
import Icon3 from "./iconinputseach/date.png"
function PageInputSearch() {
  return (
    <InputSearch>
      <DivMainInput>
        <DivInput >
          <InputSearchContentHomePage placeholder="Search for Movie" />
          <a className="text-white absolute top-2.5 right-2"><SearchOutlined /></a>
        </DivInput>
        <SelectInput>
          <DivImgInputSearch>
            <img src={Icon1} className="w-full h-full" />
          </DivImgInputSearch>
          <span className="text-green">City</span>
          <select className="bg-transparent text-white">
            <option className="text-black">London</option>
            <option className="text-black">Dhaka</option>
            <option className="text-black">Rosario</option>
            <option className="text-black">Madrid</option>
            <option className="text-black">Kolkata</option>
            <option className="text-black">Rome</option>
            <option className="text-black">Khoksa</option>
          </select>
        </SelectInput>
        <SelectInput>
          <DivImgInputSearch >
            <img src={Icon2} />
          </DivImgInputSearch>
          <span className="text-green">Date</span>
          <select className="bg-transparent text-white">
            <option className="text-black">23/10/2020</option>
            <option className="text-black">24/10/2020</option>
            <option className="text-black">25/10/2020</option>
            <option className="text-black">26/10/2020</option>
            <option className="text-black">27/10/2020</option>
            <option className="text-black">28/10/2020</option>
            <option className="text-black">29/10/2020</option>
          </select>
        </SelectInput>
        <SelectInput>
          <DivImgInputSearch >
            <img src={Icon3} />
          </DivImgInputSearch>
          <span className="text-green">Cinema</span>
          <select className="bg-transparent text-white">
            <option className="text-black">Awaken</option>
            <option className="text-black">dhaka</option>
            <option className="text-black">Rosario</option>
            <option className="text-black">Madrid</option>
            <option className="text-black">Kolkata</option>
            <option className="text-black">Rome</option>
            <option className="text-black">Khoksa</option>
          </select>
        </SelectInput>
      </DivMainInput>
    </InputSearch>
  );
}
export default PageInputSearch;
