import { CssSearchMovie } from "../cssHomePage"
import Button from "../../button/button.jsx"
import { NavLink } from "react-router-dom"
import Icon1 from "./inconSearch/ticket-tab01.png"
import Icon2 from "./inconSearch/ticket-tab02.png"
import Icon3 from "./inconSearch/ticket-tab03.png"
import InputSearch from "./inputSeach/inputseach.jsx"
function SearchMovie() {

  return (
    <CssSearchMovie >
      <div className="h-full flex justify-between content-center flex-wrap">
        <div className="uppercase">
          <h6 className="font-semibold text-green">welcome to Boleto </h6>
          <h3 className="text-2xl text-white font-semibold">what are you looking for</h3>
        </div>
        <div className="  flex justify-between w-6/12" style={{ marginBottom: "-10px" }}>
          <NavLink to="/movie" style={isActive => ({
            width: "calc(33.33% - 7px) ",
            transition: "all ease 0.3s",
            background: isActive ? "linear-gradient(169deg, #ff4343 0%, #aa52a1 37%, #5560ff 83%)" : "#7d78ff",
            marginBottom: "10px",
            color: "white",
            borderRadius: "25px",
            padding: "5px 10px",
            textTransform: "uppercase",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap: "10px"
          })}
          >
            <span className="w-10 "><img src={Icon1} className="w-full " /></span>
            <span className="pl-2 font-bold p-2.5" > movie </span>
          </NavLink>
          <NavLink to="/events" style={isActive => ({
            width: "calc(33.33% - 7px) ",
            transition: "all ease 0.3s",
            background: isActive ? "linear-gradient(169deg, #ff4343 0%, #aa52a1 37%, #5560ff 83%)" : "#7d78ff",
            marginBottom: "10px",
            color: "white",
            borderRadius: "25px",
            padding: "5px 10px",
            textTransform: "uppercase",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap: "10px"
          })}>
            <span className="w-10 "><img src={Icon2} className="w-full " /></span>
            <span className="pl-2 font-bold p-2.5" > events </span>
          </NavLink>
          <NavLink to="/sports" style={isActive => ({
            width: "calc(33.33% - 7px) ",
            transition: "all ease 0.3s",
            background: isActive ? "linear-gradient(169deg, #ff4343 0%, #aa52a1 37%, #5560ff 83%)" : "#7d78ff",
            marginBottom: "10px",
            color: "white",
            borderRadius: "25px",
            padding: "5px 10px",
            textTransform: "uppercase",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap: "10px"
          })}>
            <span className="w-10 "><img src={Icon3} className="w-full " /></span>
            <span className="pl-2 font-bold p-2.5" > events </span>
          </NavLink>
        </div>
      </div>
      <InputSearch></InputSearch>
    </CssSearchMovie>
  )
}
export default SearchMovie