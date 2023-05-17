import Movie from "./Moive";
import EnVent from "./Envents"; 
import Sport from "./Sport";
import ContentSide from "./Siders";
import SearchMovie from "../../Search_Header/index";
import { CssContentHomePage, DivSider, DivContent } from "../CsscontentHomePage";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
function ContentHomePage() {
  return (
    <div className="bg-[#001232] ">
      <SearchMovie></SearchMovie>
      <CssContentHomePage>
        <div className="flex flex-wrap">
          <DivContent>
            <Movie></Movie>
            <EnVent></EnVent>
            <Sport></Sport>
          </DivContent>
          <DivSider>
            <ContentSide></ContentSide>
          </DivSider>
        </div>
      </CssContentHomePage>
    </div>
  )
}
export default ContentHomePage;