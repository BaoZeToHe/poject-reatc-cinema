import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEventRequest } from "../../../redux/Slice/sliceDataEvents";

function DataEnVent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataEventSlice.data );
  useEffect(() => {
    dispatch(
      getEventRequest({
        _limit: 3,
      })
    );
  }, []);
  return {
    data,
  };
}

export default DataEnVent;
