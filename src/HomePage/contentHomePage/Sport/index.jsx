import Item from "antd/es/list/Item";

import { CssContentHomePage, CssDiv, CssH2, CssA, CssCard } from "../CsscontentHomePage";
import { DataSport } from "./dataSport";
import CardConTentHomePage from "../CardContentHomePage";
function Sport() {
  return (
    <CssContentHomePage className="pt-0">
      <CssDiv>
        <CssH2> Sports</CssH2>
        <CssA> View All </CssA>
      </CssDiv>
      <CssCard>
        {
          DataSport.map(Item => (
            <CardConTentHomePage content={Item} />
          ))
        }
      </CssCard>
    </CssContentHomePage >
  )
}
export default Sport;