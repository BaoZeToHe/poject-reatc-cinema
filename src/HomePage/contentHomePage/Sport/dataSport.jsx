import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSportRequest } from "../../../redux/Slice/sliceDataSport.js";

function DataSport() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataSportSlice.data);
  useEffect(() => {
    dispatch(
      getSportRequest({
        _limit: 3,
      })
    );
  }, []);
  return {
    data,
  };
}

export default DataSport;
