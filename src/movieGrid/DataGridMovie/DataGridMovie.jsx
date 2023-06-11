import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { comMonMovieGateMax } from "../../redux/Slice/sliceDataMovie";
import { useState } from "react";

function DataGridMovie() {
  const dispatch = useDispatch();
  const [params, useParams] = useState({
    _limit: 10,
    _page: 1,
  });
  const data = [];
  useEffect(() => {
    dispatch(
      //  
    );
  }, []);
  return {
    data,
  };
}

export default DataGridMovie;
