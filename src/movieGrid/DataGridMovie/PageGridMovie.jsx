import DataGridMovie  from "./DataGridMovie.jsx"
import CardGridMovie from "../CardGridMovie"
import { CssCard, DivFilter, DivFilterMain, DivFilterItem, SelectFilter , UlFilter, DivLeftFilter } from "../cssMovieGrid"
function PageGirdMovie() {
  return (
    <>
      <DivFilter>
        <DivFilterMain>
          <DivLeftFilter>
            <DivFilterItem>
              <span className="mr-5">Show :</span>
              <SelectFilter>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </SelectFilter>
            </DivFilterItem>
            <DivFilterItem>
              <span className="mr-5">Sort By :</span>
              <SelectFilter>
                <option value="showing">Now showing</option>
                <option value="exclusive">exclusive</option>
                <option value="trending">trending</option>
                <option value="most-view">most view</option>
              </SelectFilter>
            </DivFilterItem>
          </DivLeftFilter>
          <UlFilter>
            <li>Gird</li>
            <li>Doc</li>
          </UlFilter>
        </DivFilterMain>
      </DivFilter>
      <CssCard>
        {/* {
          DataGridMovie.map(Item => (
            <CardGridMovie content={Item} />
          ))
        } */}
      </CssCard>
    </>
  )
}
export default PageGirdMovie