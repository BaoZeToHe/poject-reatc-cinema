import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { comMonMovieGateMax } from "../../../redux/Slice/sliceDataMovie";
import { Movie } from "./index.jsx";

function DataMovie() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataSlice.data);
  useEffect(() => {
    dispatch(
      comMonMovieGateMax({
        _limit: 3,
      })
    );
  }, []);
  return {
    data,
  };
}

export default DataMovie;
