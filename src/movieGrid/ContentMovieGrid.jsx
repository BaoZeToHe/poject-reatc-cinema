import { DivSiderGridMovie, DivContentGridMovie } from "./cssMovieGrid"
import PageGirdMovie from "./DataGridMovie/PageGridMovie"
import PageSideGirdMovie from "./SiderGirdMovie"
function ContentMovieGrid() {
  return (
    <div>
      <div className="flex flex-wrap">
        <DivContentGridMovie>
          <PageGirdMovie></PageGirdMovie>
        </DivContentGridMovie>
        <DivSiderGridMovie>
          <PageSideGirdMovie></PageSideGirdMovie>
        </DivSiderGridMovie>
      </div>
    </div>
  )
}
export default ContentMovieGrid