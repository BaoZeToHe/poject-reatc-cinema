import Item from "antd/es/list/Item";

import { CssContentHomePage, CssDiv, CssH2, CssA, CssCard } from "../CsscontentHomePage";
import { DataEnVent } from "./dataEvent";
import CardConTentHomePage from "../CardContentHomePage";
function EnVent() {
  return (
    <CssContentHomePage className="pt-0">
      <CssDiv>
        <CssH2> events </CssH2>
        <CssA> View All </CssA>
      </CssDiv>
      <CssCard>
        {
          DataEnVent.map(Item => (
            <CardConTentHomePage content={Item} />
          ))
        }
      </CssCard>
    </CssContentHomePage >
  )
}
export default EnVent;