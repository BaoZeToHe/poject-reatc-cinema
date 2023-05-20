import { SearchMovieCss, IconSearch } from "./cssSearchHeader"
import { NavLink } from "react-router-dom"
import Icon1 from "./inconSearch/ticket-tab01.png"
import Icon2 from "./inconSearch/ticket-tab02.png"
import Icon3 from "./inconSearch/ticket-tab03.png"
import InputSearch from "./inputSeach/inputseach.jsx"

function SearchMovie() {
  return (
    <SearchMovieCss >
      <div className="h-full flex justify-between content-center flex-wrap">
        <div className="uppercase">
          <h6 className="font-semibold text-green">welcome to Boleto </h6>
          <h3 className="text-2xl text-white font-semibold">what are you looking for</h3>
        </div>
        <IconSearch >
          <NavLink to="/movie"  
          style={isActive => ({
            transition: "all ease 0.3s",
            background: isActive ? "linear-gradient(169deg, #ff4343 0%, #aa52a1 37%, #5560ff 83%)" : "#7d78ff",

          })}>
            <span className="w-10 "><img src={Icon1} className="w-full " /></span>
            <span className="pl-2 font-bold p-2.5" > movie </span>
          </NavLink>
          <NavLink to="/events" 
          style={isActive => ({
            transition: "all ease 0.3s",
            background: isActive ? "linear-gradient(169deg, #ff4343 0%, #aa52a1 37%, #5560ff 83%)" : "#7d78ff",
          })}>
            <span className="w-10 "><img src={Icon2} className="w-full " /></span>
            <span className="pl-2 font-bold p-2.5" > events </span>
          </NavLink>
          <NavLink to="/sports" style={isActive => ({
            transition: "all ease 0.3s",
            background: isActive ? "linear-gradient(169deg, #ff4343 0%, #aa52a1 37%, #5560ff 83%)" : "#7d78ff",
          })}>
            <span className="w-10 "><img src={Icon3} className="w-full " /></span>
            <span className="pl-2 font-bold p-2.5" > events </span>
          </NavLink>
        </IconSearch>
        <InputSearch></InputSearch>
      </div>
    </SearchMovieCss>
  )
}

export default SearchMovie