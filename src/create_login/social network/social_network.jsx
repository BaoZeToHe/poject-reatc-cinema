import { CssSocialNetwork } from "../CssLogin";
import { NavLink } from "react-router-dom";
import {FacebookFilled , TwitterCircleFilled , InstagramFilled} from "@ant-design/icons"
import { CssA } from "../CssLogin";
function SocialNetwork(){
    return (
    <div >
      <CssSocialNetwork> Or </CssSocialNetwork>
      <ul className="w-full flex justify-center gap-5">
        <li ><CssA to='/facebook' ><FacebookFilled /></CssA></li>
        <li ><CssA to='/twitter'><TwitterCircleFilled /></CssA></li>
        <li ><CssA to='/instagram'><InstagramFilled /></CssA></li>
      </ul>
    </div>
    )
}
export default SocialNetwork;