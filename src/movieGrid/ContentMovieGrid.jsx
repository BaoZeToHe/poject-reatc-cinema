import { DivSiderGridMovie, DivContentGridMovie } from "./cssMovieGrid";
import PageGirdMovie from "./DataGridMovie/PageGridMovie";
import PageSideGirdMovie from "./SiderGirdMovie";
import MainPage from "./DataGridMovie/MainPage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function ContentMovieGrid() {
  return (
    <div>
      <div className="flex flex-wrap">
        <DivContentGridMovie>
          <Switch>
            <Route path="/movie-List/:page" children={<MainPage />} />
          </Switch>
        </DivContentGridMovie>
        <DivSiderGridMovie>
          <PageSideGirdMovie></PageSideGirdMovie>
        </DivSiderGridMovie>
      </div>
    </div>
  );
}
export default ContentMovieGrid;
