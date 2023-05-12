import { CSSInputSearch } from "../../cssHomePage";
import { SearchOutlined } from "@ant-design/icons";
import Icon1 from "./iconinputseach/cinema.png";
import Icon2 from "./iconinputseach/city.png";
import Icon3 from "./iconinputseach/date.png"
function InputSearch() {
  const cssInput = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #9eb1eb",
    borderRadius: 0,
    padding: 0,
    height: "45px",
    paddingRight: "50px",


  }
  const cssImg = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "10px",
    boxShadow: "5px 0 15px rgba(0, 0, 0, 0.5)"
  }
  return (
    <CSSInputSearch>
      <div className="flex justify-between">
        <div className="relative w-2/12 ">
          <input placeholder="Search for Movie" style={cssInput} />
          <a className="text-white absolute top-2.5 right-2"><SearchOutlined /></a>
        </div>
        <div className="w-3/12 flex justify-center flex-wrap	items-center gap-3">
          <div style={cssImg}>
            <img src={Icon1} className="w-full h-full" />
          </div>
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
        </div>
        <div className="w-3/12 flex justify-center flex-wrap	items-center gap-3">
          <div style={cssImg}>
            <img src={Icon2} />
          </div>
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
        </div>
        <div className="w-3/12 flex justify-center flex-wrap	items-center gap-3">
          <div style={cssImg}>
            <img src={Icon3} />
          </div>
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
        </div>
      </div>
    </CSSInputSearch>
  );
}
export default InputSearch;
