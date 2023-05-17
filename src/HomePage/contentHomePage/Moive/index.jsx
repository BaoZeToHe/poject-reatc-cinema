import Item from "antd/es/list/Item";

import { CssContentHomePage, CssDiv, CssH2, CssA, CssCard } from "../../CsscontentHomePage";
import { DataMovie } from "./dataMovie";
import CardConTentHomePage from "../CardContentHomePage";

function Movie() {
  return (
    <CssContentHomePage className="pt-0">
      <CssDiv>
        <CssH2> movie </CssH2>
        <CssA> View All </CssA>
      </CssDiv>
      <CssCard>
        {
          DataMovie.map(Item => (
            <CardConTentHomePage content={Item} />
          ))
        }
        </CssCard>
    </CssContentHomePage>
  )
}
export default Movie;