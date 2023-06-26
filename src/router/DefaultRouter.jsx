import { Route } from "react-router-dom/cjs/react-router-dom.min";
import PageHeader from "../header/header";
import Footer from "../Footer/index";
import { useDispatch , useSelector } from "react-redux";
import { setLoading } from "../redux/Slice/sliceLoading";
import { useEffect } from "react";
import Loading from "../loading";

export default function DefaultRouter({ Component, ...props }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.CheckLoading.check);
  useEffect(() => {
    dispatch(
      setLoading(true)
    );
  }, []);
  return (
    <Route
      {...props}
      render={() => {
        return (
          <>
            <div className="sticky top-0 z-50 w-full ">
              <PageHeader></PageHeader>
            </div>
            {data ? <Loading></Loading> :  <Component />}
            <Footer></Footer>
          </>
        );
      }}
    />
  );
}
