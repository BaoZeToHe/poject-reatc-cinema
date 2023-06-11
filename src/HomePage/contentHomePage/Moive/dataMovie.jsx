import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../redux/Slice/sliceDataMovie";

function DataMovie() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataSlice.data);
  useEffect(() => {
    dispatch(
      getMoviesRequest({
        _limit: 3,
      })
    );
  }, []);
  return {
    data,
  };
}

export default DataMovie;
